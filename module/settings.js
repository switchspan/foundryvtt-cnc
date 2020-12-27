export const registerSystemSettings = function () {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("cnc", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: "",
  });

  /**
   * Register resting variants
   */
  game.settings.register("cnc", "restVariant", {
    name: "Rest variant",
    hint: "Register resting variants",
    scope: "world",
    config: true,
    default: "normal",
    type: String,
    choices: {
      normal: "Normal",
      gritty: "Gritty",
      epic: "Epic",
    },
    onChange: (value) => console.log(value),
  });

  /**
   * Register diagonal movement rule setting
   */
  game.settings.register("cnc", "diagonalMovement", {
    name: "CNC.SettingDiagonalMovementRule",
    hint: "Register diagonal movement rule setting",
    scope: "world",
    config: true,
    default: "555",
    type: String,
    choices: {
      555: "CNC.DiagPHB",
      5105: "CNC.DiagDMG",
      EUCL: "CNC.DiagEuclidean",
    },
    onChange: (rule) => (canvas.grid.diagonalRule = rule),
  });

  /**
   * Register Initiative formula setting
   */
  game.settings.register("cnc", "initiativeDexTiebreaker", {
    name: "SETTINGS.CncInitTBN",
    hint: "Use Dexterity for the initiative tiebreaker",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Require Currency Carrying Weight
   */
  game.settings.register("cnc", "currencyWeight", {
    name: "SETTINGS.CncCurWtN",
    hint: "Require currency carrying weight",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Option to disable XP bar for session-based or story-based advancement.
   */
  game.settings.register("cnc", "disableExperienceTracking", {
    name: "SETTINGS.CncNoExpN",
    hint: "Disable experience (XP) tracking",
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
    hint: "Automatically collapse item card descriptions in chat",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: (s) => {
      ui.chat.render();
    },
  });

  /**
   * Option to allow GMs to restrict polymorphing to GMs only.
   */
  game.settings.register("cnc", "allowPolymorphing", {
    name: "SETTINGS.CncAllowPolymorphingN",
    hint: "Restrict polymorphing to Castle Keepers only",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Remember last-used polymorph settings.
   */
  game.settings.register("cnc", "polymorphSettings", {
    scope: "client",
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
      transformTokens: true,
    },
  });
};
