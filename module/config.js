// Namespace Configuration Values
export const CNC = {};

// ASCII Artwork
CNC.ASCII = ` ___           _  _   _                _   ___                       
|_ _|_ _  ___ | || | | |   ___  _ _  _| | /  _>  ___ ._ _ _  ___  ___
 | || '_>/ . \\| || | | |_ / . \\| '_>/ . | | <_/\\<_> || ' ' |/ ._><_-<
 |_||_|  \\___/|_||_| |___|\\___/|_|  \\___| \`____/<___||_|_|_|\\___./__/`;

/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
CNC.attributes = {
  "str": "CNC.AbilityStr",
  "dex": "CNC.AbilityDex",
  "con": "CNC.AbilityCon",
  "int": "CNC.AbilityInt",
  "wis": "CNC.AbilityWis",
  "cha": "CNC.AbilityCha"
};

CNC.attributeAbbreviations = {
  "str": "CNC.AbilityStrAbbr",
  "dex": "CNC.AbilityDexAbbr",
  "con": "CNC.AbilityConAbbr",
  "int": "CNC.AbilityIntAbbr",
  "wis": "CNC.AbilityWisAbbr",
  "cha": "CNC.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
CNC.alignments = {
  'lg': "CNC.AlignmentLG",
  'ng': "CNC.AlignmentNG",
  'cg': "CNC.AlignmentCG",
  'ln': "CNC.AlignmentLN",
  'tn': "CNC.AlignmentTN",
  'cn': "CNC.AlignmentCN",
  'le': "CNC.AlignmentLE",
  'ne': "CNC.AlignmentNE",
  'ce': "CNC.AlignmentCE"
};

/* -------------------------------------------- */

CNC.hitDieTypes = ["d4", "d6", "d8", "d10", "d12"];

CNC.spellDurationUnits = ["rounds", "hours", "days", "weeks", "months", "years"];

/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
 CNC.timePeriods = {
  "inst": "CNC.TimeInst",
  "turn": "CNC.TimeTurn",
  "round": "CNC.TimeRound",
  "minute": "CNC.TimeMinute",
  "hour": "CNC.TimeHour",
  "day": "CNC.TimeDay",
  "month": "CNC.TimeMonth",
  "year": "CNC.TimeYear",
  "perm": "CNC.TimePerm",
  "spec": "CNC.Special"
};
/* -------------------------------------------- */

// Creature Sizes
CNC.actorSizes = {
  "sm": "CNC.SizeSmall",
  "med": "CNC.SizeMedium",
  "lg": "CNC.SizeLarge",
  "huge": "CNC.SizeHuge",
  "grg": "CNC.SizeGargantuan"
};

CNC.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the CNC system
 * @type {Object}
 */
 CNC.currencies = {
  "pp": "CNC.CurrencyPP",
  "gp": "CNC.CurrencyGP",
  "sp": "CNC.CurrencySP",
  "cp": "CNC.CurrencyCP",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
CNC.currencyConversion = {
  cp: {into: "sp", each: 10},
  sp: {into: "gp", each: 10},
  gp: {into: "pp", each: 10}
};

/* -------------------------------------------- */