/**
 * The Castles & Crusades game system for Foundry Virtual Tabletop
 * A system for playing the one of the best OSR roleplaying games.
 * Author: switchspan
 * Software License: GNU GPLv3
 * Repository: https://github.com/switchspan/foundryvtt-cnc
 * Issue Tracker: https://github.com/switchspan/foundryvtt-cnc/issues
 */

// Import Modules
import { CNC } from "./module/config.js";
import { registerSystemSettings } from "./module/settings.js";
import { preloadHandlebarsTemplates } from "./module/templates.js";
import { _getInitiativeFormula } from "./module/combat.js";
import { measureDistances, getBarAttribute } from "./module/canvas.js";

// Import Entities
import ActorCnc from "./module/actor/entity.js";
import ItemCnc from "./module/item/entity.js";

// Import Applications
import AbilityTemplate from "./module/pixi/ability-template.js";
import AbilityUseDialog from "./module/apps/ability-use-dialog.js";
import ActorSheetFlags from "./module/apps/actor-flags.js";
import ActorSheetCncCharacter from "./module/actor/sheets/character.js";
import ActorSheetCncNPC from "./module/actor/sheets/npc.js";
import ActorSheetCncVehicle from "./module/actor/sheets/vehicle.js";
import ItemSheetCnc from "./module/item/sheet.js";
import ShortRestDialog from "./module/apps/short-rest.js";
import TraitSelector from "./module/apps/trait-selector.js";
import ActorMovementConfig from "./module/apps/movement-config.js";
//import ActorSensesConfig from './module/apps/senses-config.js'

// Import Helpers
import * as chat from "./module/chat.js";
import * as dice from "./module/dice.js";
import * as macros from "./module/macros.js";
import * as migrations from "./module/migration.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function () {
  console.log(
    `CNC | Initializing the Castles & Crusades Game System\n${CNC.ASCII}`
  );

  // Create a namespace within the game global
  game.CNC = {
    applications: {
      AbilityUseDialog,
      ActorSheetFlags,
      ActorSheetCncCharacter,
      ActorSheetCncNPC,
      ActorSheetCncVehicle,
      ItemSheetCnc,
      ShortRestDialog,
      TraitSelector,
      ActorMovementConfig,
    },
    canvas: {
      AbilityTemplate,
    },
    config: CNC,
    dice: dice,
    entities: {
      ActorCnc,
      ItemCnc,
    },
    macros: macros,
    migrations: migrations,
    rollItemMacro: macros.rollItemMacro,
  };

  // Record Configuration Values
  CONFIG.CNC = CNC;
  CONFIG.Actor.entityClass = ActorCnc;
  CONFIG.Item.entityClass = ItemCnc;
  CONFIG.time.roundTime = 6;

  // Register System Settings
  registerSystemSettings();

  // Patch Core Functions
  CONFIG.Combat.initiative.formula =
    "1d20 + @attributes.init.mod + @attributes.init.prof + @attributes.init.bonus";
  Combat.prototype._getInitiativeFormula = _getInitiativeFormula;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("cnc", ActorSheetCncCharacter, {
    types: ["character"],
    makeDefault: true,
    label: "CNC.SheetClassCharacter",
  });
  Actors.registerSheet("cnc", ActorSheetCncNPC, {
    types: ["npc"],
    makeDefault: true,
    label: "CNC.SheetClassNPC",
  });
  Actors.registerSheet("cnc", ActorSheetCncVehicle, {
    types: ["vehicle"],
    makeDefault: true,
    label: "CNC.SheetClassVehicle",
  });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("cnc", ItemSheetCnc, {
    makeDefault: true,
    label: "CNC.SheetClassItem",
  });

  // Preload Handlebars Templates
  preloadHandlebarsTemplates();
});

/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

/**
 * This function runs after game data has been requested and loaded from the servers, so entities exist
 */
Hooks.once("setup", function () {
  // Localize CONFIG objects once up-front
  const toLocalize = [
    "abilities",
    "abilityAbbreviations",
    "abilityActivationTypes",
    "abilityConsumptionTypes",
    "actorSizes",
    "alignments",
    "armorProficiencies",
    "conditionTypes",
    "consumableTypes",
    "cover",
    "currencies",
    "damageResistanceTypes",
    "damageTypes",
    "distanceUnits",
    "equipmentTypes",
    "healingTypes",
    "itemActionTypes",
    "languages",
    "limitedUsePeriods",
    "movementTypes",
    "movementUnits",
    "polymorphSettings",
    "proficiencyLevels",
    "senses",
    "skills",
    "spellComponents",
    "spellLevels",
    "spellPreparationModes",
    "spellScalingModes",
    "spellSchools",
    "targetTypes",
    "timePeriods",
    "toolProficiencies",
    "weaponProficiencies",
    "weaponProperties",
    "weaponTypes",
  ];

  // Exclude some from sorting where the default order matters
  const noSort = [
    "abilities",
    "alignments",
    "currencies",
    "distanceUnits",
    "movementUnits",
    "itemActionTypes",
    "proficiencyLevels",
    "limitedUsePeriods",
    "spellComponents",
    "spellLevels",
    "spellPreparationModes",
    "weaponTypes",
  ];

  // Localize and sort CONFIG objects
  for (const o of toLocalize) {
    const localized = Object.entries(CONFIG.CNC[o]).map((e) => {
      return [e[0], game.i18n.localize(e[1])];
    });
    if (!noSort.includes(o)) localized.sort((a, b) => a[1].localeCompare(b[1]));
    CONFIG.CNC[o] = localized.reduce((obj, e) => {
      obj[e[0]] = e[1];
      return obj;
    }, {});
  }
});

/* -------------------------------------------- */

/**
 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
 */
Hooks.once("ready", function () {
  // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  Hooks.on("hotbarDrop", (bar, data, slot) => macros.create5eMacro(data, slot));

  // Determine whether a system migration is required and feasible
  if (!game.user.isGM) return;
  const currentVersion = game.settings.get("cnc", "systemMigrationVersion");
  const NEEDS_MIGRATION_VERSION = "1.2.1";
  const COMPATIBLE_MIGRATION_VERSION = 0.8;
  const needsMigration =
    currentVersion && isNewerVersion(NEEDS_MIGRATION_VERSION, currentVersion);
  if (!needsMigration) return;

  // Perform the migration
  if (
    currentVersion &&
    isNewerVersion(COMPATIBLE_MIGRATION_VERSION, currentVersion)
  ) {
    const warning =
      "Your CNC system data is from too old a Foundry version and cannot be reliably migrated to the latest version. The process will be attempted, but errors may occur.";
    ui.notifications.error(warning, { permanent: true });
  }
  migrations.migrateWorld();
});

/* -------------------------------------------- */
/*  Canvas Initialization                       */
/* -------------------------------------------- */

Hooks.on("canvasInit", function () {
  // Extend Diagonal Measurement
  canvas.grid.diagonalRule = game.settings.get("cnc", "diagonalMovement");
  SquareGrid.prototype.measureDistances = measureDistances;

  // Extend Token Resource Bars
  Token.prototype.getBarAttribute = getBarAttribute;
});

/* -------------------------------------------- */
/*  Other Hooks                                 */
/* -------------------------------------------- */

Hooks.on("renderChatMessage", (app, html, data) => {
  // Display action buttons
  chat.displayChatActionButtons(app, html, data);

  // Highlight critical success or failure die
  chat.highlightCriticalSuccessFailure(app, html, data);

  // Optionally collapse the content
  if (game.settings.get("cnc", "autoCollapseItemCards"))
    html.find(".card-content").hide();
});
Hooks.on("getChatLogEntryContext", chat.addChatMessageContextOptions);
Hooks.on("renderChatLog", (app, html, data) => ItemCnc.chatListeners(html));
Hooks.on("renderChatPopout", (app, html, data) => ItemCnc.chatListeners(html));
Hooks.on("getActorDirectoryEntryContext", ActorCnc.addDirectoryContextOptions);

// TODO I should remove this
Handlebars.registerHelper("getProperty", function (data, property) {
  return getProperty(data, property);
});
