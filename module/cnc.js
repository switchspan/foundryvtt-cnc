// Config settings
import { CNC } from "./config.js";

// Import Entities
import { CncActor } from "./actor/actor.js";
import { CncItem } from "./item/item.js";

// Preload Templates
import { preloadHandlebarsTemplates } from "./templates.js";

// Import Applications
import { CncActorSheetCharacter } from "./actor/sheets/character.js";
import { CncItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function () {
  console.log(`CnC | Initializing the Castles & Crusades Game System\n${CNC.ASCII}`);

  game.cnc = {
    CncActor,
    CncItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d10",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = CncActor;
  CONFIG.Item.entityClass = CncItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("cnc", CncActorSheetCharacter, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("cnc", CncItemSheet, { makeDefault: true });

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
});
