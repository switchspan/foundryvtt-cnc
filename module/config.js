// Namespace Configuration Values
export const CNC = {};

// ASCII Artwork
CNC.ASCII = ` ____            ____ 
/ ___|  _ __    / ___|
| |     | '_ \\  | |    
| |___  | | | | | |___ 
\\_____| |_| |_| \\____|
=======================`;

/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
CNC.abilities = {
    "str": "CNC.AbilityStr",
    "dex": "CNC.AbilityDex",
    "con": "CNC.AbilityCon",
    "int": "CNC.AbilityInt",
    "wis": "CNC.AbilityWis",
    "cha": "CNC.AbilityCha"
  };
  
CNC.abilityAbbreviations = {
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