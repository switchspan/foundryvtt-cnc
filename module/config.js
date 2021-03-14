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