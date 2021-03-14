export const registerSystemSettings = function () {

    /**
     * Track the system version upon which point a migration was last applied
     */
    // game.settings.register("cnc", "systemMigrationVersion", {
    //     name: "System Migration Version",
    //     scope: "world",
    //     config: false,
    //     type: String,
    //     default: ""
    // });

    /**
     * Register resting variants
     */
    // game.settings.register("cnc", "restVariant", {
    //     name: "SETTINGS.cncRestN",
    //     hint: "SETTINGS.cncRestL",
    //     scope: "world",
    //     config: true,
    //     default: "normal",
    //     type: String,
    //     choices: {
    //         "normal": "SETTINGS.cncRestPHB",
    //         "gritty": "SETTINGS.cncRestGritty",
    //         "epic": "SETTINGS.cncRestEpic",
    //     }
    // });

    /**
     * Register diagonal movement rule setting
     */
    // game.settings.register("cnc", "diagonalMovement", {
    //     name: "SETTINGS.cncDiagN",
    //     hint: "SETTINGS.cncDiagL",
    //     scope: "world",
    //     config: true,
    //     default: "555",
    //     type: String,
    //     choices: {
    //         "555": "SETTINGS.cncDiagPHB",
    //         "5105": "SETTINGS.cncDiagDMG",
    //         "EUCL": "SETTINGS.cncDiagEuclidean",
    //     },
    //     onChange: rule => canvas.grid.diagonalRule = rule
    // });

    /**
     * Register Initiative formula setting
     */
    // game.settings.register("cnc", "initiativeDexTiebreaker", {
    //     name: "SETTINGS.cncInitTBN",
    //     hint: "SETTINGS.cncInitTBL",
    //     scope: "world",
    //     config: true,
    //     default: false,
    //     type: Boolean
    // });

    /**
     * Option to allow multi-classing of characters
     * 
     */
    game.settings.register("cnc", "multiClassingEnabled", {
        name: "SETTINGS.cncMultiClass.name",
        hint: "SETTINGS.cncMultiClass.label",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });

    /**
     * Option to disable XP bar for session-based or story-based advancement.
     */
    game.settings.register("cnc", "disableExperienceTracking", {
        name: "SETTINGS.cncNoExpN.name",
        hint: "SETTINGS.cncNoExpN.label",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    /**
     * Option to automatically collapse Item Card descriptions
     */
    // game.settings.register("cnc", "autoCollapseItemCards", {
    //     name: "SETTINGS.cncAutoCollapseCardN",
    //     hint: "SETTINGS.cncAutoCollapseCardL",
    //     scope: "client",
    //     config: true,
    //     default: false,
    //     type: Boolean,
    //     onChange: s => {
    //         ui.chat.render();
    //     }
    // });

    /**
     * Option to allow GMs to restrict polymorphing to GMs only.
     */
    // game.settings.register('cnc', 'allowPolymorphing', {
    //     name: 'SETTINGS.cncAllowPolymorphingN',
    //     hint: 'SETTINGS.cncAllowPolymorphingL',
    //     scope: 'world',
    //     config: true,
    //     default: false,
    //     type: Boolean
    // });

    /**
     * Remember last-used polymorph settings.
     */
    // game.settings.register('cnc', 'polymorphSettings', {
    //     scope: 'client',
    //     default: {
    //         keepPhysical: false,
    //         keepMental: false,
    //         keepSaves: false,
    //         keepSkills: false,
    //         mergeSaves: false,
    //         mergeSkills: false,
    //         keepClass: false,
    //         keepFeats: false,
    //         keepSpells: false,
    //         keepItems: false,
    //         keepBio: false,
    //         keepVision: true,
    //         transformTokens: true
    //     }
    // });
};
