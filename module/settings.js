export const registerSystemSettings = function() {

  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("cnc", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: ""
  });

  /**
   * Register resting variants
   */
  game.settings.register("cnc", "restVariant", {
    name: "SETTINGS.CncRestN",
    hint: "SETTINGS.CncRestL",
    scope: "world",
    config: true,
    default: "normal",
    type: String,
    choices: {
      "normal": "SETTINGS.CncRestPHB",
      "gritty": "SETTINGS.CncRestGritty",
      "epic": "SETTINGS.CncRestEpic",
    }
  });

  /**
   * Register diagonal movement rule setting
   */
  game.settings.register("cnc", "diagonalMovement", {
    name: "SETTINGS.CncDiagN",
    hint: "SETTINGS.CncDiagL",
    scope: "world",
    config: true,
    default: "555",
    type: String,
    choices: {
      "555": "SETTINGS.CncDiagPHB",
      "5105": "SETTINGS.CncDiagDMG",
      "EUCL": "SETTINGS.CncDiagEuclidean",
    },
    onChange: rule => canvas.grid.diagonalRule = rule
  });

  /**
   * Register Initiative formula setting
   */
  game.settings.register("cnc", "initiativeDexTiebreaker", {
    name: "SETTINGS.CncInitTBN",
    hint: "SETTINGS.CncInitTBL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  /**
   * Require Currency Carrying Weight
   */
  game.settings.register("cnc", "currencyWeight", {
    name: "SETTINGS.CncCurWtN",
    hint: "SETTINGS.CncCurWtL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  /**
   * Option to disable XP bar for session-based or story-based advancement.
   */
  game.settings.register("cnc", "disableExperienceTracking", {
    name: "SETTINGS.CncNoExpN",
    hint: "SETTINGS.CncNoExpL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Option to automatically collapse Item Card descriptions
   */
  game.settings.register("cnc", "autoCollapseItemCards", {
    name: "SETTINGS.CncAutoCollapseCardN",
    hint: "SETTINGS.CncAutoCollapseCardL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: s => {
      ui.chat.render();
    }
  });

  /**
   * Option to allow GMs to restrict polymorphing to GMs only.
   */
  game.settings.register('cnc', 'allowPolymorphing', {
    name: 'SETTINGS.CncAllowPolymorphingN',
    hint: 'SETTINGS.CncAllowPolymorphingL',
    scope: 'world',
    config: true,
    default: false,
    type: Boolean
  });

  /**
   * Remember last-used polymorph settings.
   */
  game.settings.register('cnc', 'polymorphSettings', {
    scope: 'client',
    default: {
      keepPhysical: false,
      keepMental: false,
      keepSaves: false,
      keepSkills: false,
      mergeSaves: false,
      mergeSkills: false,
      keepClass: false,
      keepFeats: false,
      keepSpells: false,
      keepItems: false,
      keepBio: false,
      keepVision: true,
      transformTokens: true
    }
  });
};
