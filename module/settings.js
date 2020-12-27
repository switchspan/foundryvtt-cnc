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

  //TODO: See if we need resting variants
  /**
   * Register resting variants
   */
  game.settings.register("cnc", "restVariant", {
    name: "Resting (5e Variant Rule)",
    hint: "Set the downtime days rules for PCs resting",
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

  //TODO: See if we need diagonal movement rules and
  /**
   * Register diagonal movement rule setting
   * See: https://www.reddit.com/r/DnD/comments/3g0uuq/5e_diagonals_and_split_movement/
   */
  game.settings.register("cnc", "diagonalMovement", {
    name: "Diagonal movement rule",
    hint: "Register diagonal movement rule setting",
    scope: "world",
    config: true,
    default: "555",
    type: String,
    choices: {
      555: "D&D 5e (5-5-5)",
      5105: "D&D 3.5 (5-10-5)",
      EUCL: "Euclidean",
    },
    onChange: (rule) => (canvas.grid.diagonalRule = rule),
  });

  /**
   * Register Initiative formula setting
   */
  game.settings.register("cnc", "initiativeDexTiebreaker", {
    name: "Dexterity initiative tiebreaker",
    hint: "Use Dexterity as a tiebreaker for initiative rolls",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    onChange: (value) => console.log(value),
  });

  /**
   * Require Currency Carrying Weight
   */
  game.settings.register("cnc", "currencyWeight", {
    name: "Require currency carrying weight",
    hint: "Require carrying weight for character's currency",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Option to disable XP bar for session-based or story-based advancement.
   */
  game.settings.register("cnc", "disableExperienceTracking", {
    name: "Disable XP tracking",
    hint: "Disable experience (XP) tracking for characters",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Option to automatically collapse Item Card descriptions
   */
  game.settings.register("cnc", "autoCollapseItemCards", {
    name: "Auto-collapse item cards",
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
    name: "Restrict polymorphing to Castle Keepers",
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
