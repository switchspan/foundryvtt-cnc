// Config settings
import { CNC } from "./config.js";

// Game system settings
import { registerSystemSettings } from "./settings.js";

// Import Entities
import { CncActor } from "./actor/actor.js";
import { CncItem } from "./item/item.js";

// Preload Templates
import { preloadHandlebarsTemplates } from "./templates.js";

// Import Applications
import { CncActorSheetCharacter } from "./actor/sheets/character.js";
import { CncItemSheet } from "./item/item-sheet.js";
//import { CncItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function () {
  console.log(`TLG | Initializing the Castles & Crusades Game System\n${CNC.ASCII}`);

  // Registering system settings
  registerSystemSettings();

  // Create a namespace within the game global
  game.cnc = {
    entities: {
      CncActor,
      CncItem
    },
    config: CNC
  };

  // Record Configuration Values
  CONFIG.CNC = CNC;
  //CONFIG.time.roundTime = 6;

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  //TODO: check initiative formula for CNC
  CONFIG.Combat.initiative = {
    formula: "1d10",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = CncActor;
  CONFIG.Item.entityClass = CncItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("cnc", CncActorSheetCharacter, { makeDefault: true, label: "CNC.SheetClassCharacter" });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("cnc", CncItemSheet, { makeDefault: true, label: "CNC.SheetClassItem" });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function () {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function (str) {
    return str.toLowerCase();
  });

  Handlebars.registerHelper('cnc-add', (value, toAdd) => {
    return new Handlebars.SafeString(String(value + toAdd));
  });

  // Preload Handlebars Templates
  preloadHandlebarsTemplates();

  // Crack open a Dr. Pepper
  console.log(`TLG | Cracking open Dr. Pepper`);
});
