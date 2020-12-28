import { ClassFeatures } from "./classFeatures.js";

// Namespace Configuration Values
export const CNC = {};

// ASCII Artwork
CNC.ASCII = `_______________________________
 _______  _        _______ 
(  ____ \\( (    /|(  ____ \\
| (    \\/|  \\  ( || (    \\/
| |      |   \\ | || |      
| |      | (\\ \\) || |      
| |      | | \\   || |      
| (____/\\| )  \\  || (____/\\
(_______/|/    )_)(_______/                        
_______________________________`;

/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
CNC.abilities = {
  str: "CNC.AbilityStr",
  dex: "CNC.AbilityDex",
  con: "CNC.AbilityCon",
  int: "CNC.AbilityInt",
  wis: "CNC.AbilityWis",
  cha: "CNC.AbilityCha",
};

CNC.abilityAbbreviations = {
  str: "CNC.AbilityStrAbbr",
  dex: "CNC.AbilityDexAbbr",
  con: "CNC.AbilityConAbbr",
  int: "CNC.AbilityIntAbbr",
  wis: "CNC.AbilityWisAbbr",
  cha: "CNC.AbilityChaAbbr",
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
CNC.alignments = {
  lg: "CNC.AlignmentLG",
  ng: "CNC.AlignmentNG",
  cg: "CNC.AlignmentCG",
  ln: "CNC.AlignmentLN",
  tn: "CNC.AlignmentTN",
  cn: "CNC.AlignmentCN",
  le: "CNC.AlignmentLE",
  ne: "CNC.AlignmentNE",
  ce: "CNC.AlignmentCE",
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
CNC.attunements = {
  0: "CNC.AttunementNone",
  1: "CNC.AttunementRequired",
  2: "CNC.AttunementAttuned",
};

/* -------------------------------------------- */

CNC.weaponProficiencies = {
  sim: "CNC.WeaponSimpleProficiency",
  mar: "CNC.WeaponMartialProficiency",
};

CNC.toolProficiencies = {
  art: "CNC.ToolArtisans",
  disg: "CNC.ToolDisguiseKit",
  forg: "CNC.ToolForgeryKit",
  game: "CNC.ToolGamingSet",
  herb: "CNC.ToolHerbalismKit",
  music: "CNC.ToolMusicalInstrument",
  navg: "CNC.ToolNavigators",
  pois: "CNC.ToolPoisonersKit",
  thief: "CNC.ToolThieves",
  vehicle: "CNC.ToolVehicle",
};

/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
CNC.timePeriods = {
  inst: "CNC.TimeInst",
  turn: "CNC.TimeTurn",
  round: "CNC.TimeRound",
  minute: "CNC.TimeMinute",
  hour: "CNC.TimeHour",
  day: "CNC.TimeDay",
  month: "CNC.TimeMonth",
  year: "CNC.TimeYear",
  perm: "CNC.TimePerm",
  spec: "CNC.Special",
};

/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
CNC.abilityActivationTypes = {
  none: "CNC.None",
  action: "CNC.Action",
  bonus: "CNC.BonusAction",
  reaction: "CNC.Reaction",
  minute: CNC.timePeriods.minute,
  hour: CNC.timePeriods.hour,
  day: CNC.timePeriods.day,
  special: CNC.timePeriods.spec,
  legendary: "CNC.LegAct",
  lair: "CNC.LairAct",
  crew: "CNC.VehicleCrewAction",
};

/* -------------------------------------------- */

CNC.abilityConsumptionTypes = {
  ammo: "CNC.ConsumeAmmunition",
  attribute: "CNC.ConsumeAttribute",
  material: "CNC.ConsumeMaterial",
  charges: "CNC.ConsumeCharges",
};

/* -------------------------------------------- */

// Creature Sizes
CNC.actorSizes = {
  tiny: "CNC.SizeTiny",
  sm: "CNC.SizeSmall",
  med: "CNC.SizeMedium",
  lg: "CNC.SizeLarge",
  huge: "CNC.SizeHuge",
  grg: "CNC.SizeGargantuan",
};

CNC.tokenSizes = {
  tiny: 1,
  sm: 1,
  med: 1,
  lg: 2,
  huge: 3,
  grg: 4,
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
CNC.itemActionTypes = {
  mwak: "CNC.ActionMWAK",
  rwak: "CNC.ActionRWAK",
  msak: "CNC.ActionMSAK",
  rsak: "CNC.ActionRSAK",
  save: "CNC.ActionSave",
  heal: "CNC.ActionHeal",
  abil: "CNC.ActionAbil",
  util: "CNC.ActionUtil",
  other: "CNC.ActionOther",
};

/* -------------------------------------------- */

CNC.itemCapacityTypes = {
  items: "CNC.ItemContainerCapacityItems",
  weight: "CNC.ItemContainerCapacityWeight",
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
CNC.limitedUsePeriods = {
  sr: "CNC.ShortRest",
  lr: "CNC.LongRest",
  day: "CNC.Day",
  charges: "CNC.Charges",
};

/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
CNC.equipmentTypes = {
  light: "CNC.EquipmentLight",
  medium: "CNC.EquipmentMedium",
  heavy: "CNC.EquipmentHeavy",
  bonus: "CNC.EquipmentBonus",
  natural: "CNC.EquipmentNatural",
  shield: "CNC.EquipmentShield",
  clothing: "CNC.EquipmentClothing",
  trinket: "CNC.EquipmentTrinket",
  vehicle: "CNC.EquipmentVehicle",
};

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
CNC.armorProficiencies = {
  lgt: CNC.equipmentTypes.light,
  med: CNC.equipmentTypes.medium,
  hvy: CNC.equipmentTypes.heavy,
  shl: "CNC.EquipmentShieldProficiency",
};

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
CNC.consumableTypes = {
  ammo: "CNC.ConsumableAmmunition",
  potion: "CNC.ConsumablePotion",
  poison: "CNC.ConsumablePoison",
  food: "CNC.ConsumableFood",
  scroll: "CNC.ConsumableScroll",
  wand: "CNC.ConsumableWand",
  rod: "CNC.ConsumableRod",
  trinket: "CNC.ConsumableTrinket",
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the Castles & Crusades system
 * @type {Object}
 */
CNC.currencies = {
  pp: "CNC.CurrencyPP",
  gp: "CNC.CurrencyGP",
  sp: "CNC.CurrencySP",
  cp: "CNC.CurrencyCP",
};

/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
CNC.currencyConversion = {
  cp: { into: "sp", each: 10 },
  sp: { into: "gp", each: 10 },
  gp: { into: "pp", each: 10 },
};

/* -------------------------------------------- */

// Damage Types
CNC.damageTypes = {
  acid: "CNC.DamageAcid",
  bludgeoning: "CNC.DamageBludgeoning",
  cold: "CNC.DamageCold",
  fire: "CNC.DamageFire",
  force: "CNC.DamageForce",
  lightning: "CNC.DamageLightning",
  necrotic: "CNC.DamageNecrotic",
  piercing: "CNC.DamagePiercing",
  poison: "CNC.DamagePoison",
  psychic: "CNC.DamagePsychic",
  radiant: "CNC.DamageRadiant",
  slashing: "CNC.DamageSlashing",
  thunder: "CNC.DamageThunder",
};

// Damage Resistance Types
CNC.damageResistanceTypes = mergeObject(duplicate(CNC.damageTypes), {
  physical: "CNC.DamagePhysical",
});

/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
CNC.movementTypes = {
  burrow: "CNC.MovementBurrow",
  climb: "CNC.MovementClimb",
  fly: "CNC.MovementFly",
  swim: "CNC.MovementSwim",
  walk: "CNC.MovementWalk",
};

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
CNC.movementUnits = {
  ft: "CNC.DistFt",
  mi: "CNC.DistMi",
};

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from CNC.movementUnits
 * @type {Object<string,string>}
 */
CNC.distanceUnits = {
  none: "CNC.None",
  self: "CNC.DistSelf",
  touch: "CNC.DistTouch",
  spec: "CNC.Special",
  any: "CNC.DistAny",
};
for (const [k, v] of Object.entries(CNC.movementUnits)) {
  CNC.distanceUnits[k] = v;
}

/* -------------------------------------------- */

/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
CNC.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000, // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
CNC.targetTypes = {
  none: "CNC.None",
  self: "CNC.TargetSelf",
  creature: "CNC.TargetCreature",
  ally: "CNC.TargetAlly",
  enemy: "CNC.TargetEnemy",
  object: "CNC.TargetObject",
  space: "CNC.TargetSpace",
  radius: "CNC.TargetRadius",
  sphere: "CNC.TargetSphere",
  cylinder: "CNC.TargetCylinder",
  cone: "CNC.TargetCone",
  square: "CNC.TargetSquare",
  cube: "CNC.TargetCube",
  line: "CNC.TargetLine",
  wall: "CNC.TargetWall",
};

/* -------------------------------------------- */

/**
 * Map the subset of target types which produce a template area of effect
 * The keys are CNC target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
CNC.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray",
};

/* -------------------------------------------- */

// Healing Types
CNC.healingTypes = {
  healing: "CNC.Healing",
  temphp: "CNC.HealingTemp",
};

/* -------------------------------------------- */

/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
CNC.hitDieTypes = ["d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @type {object}
 */
CNC.senses = {
  blindsight: "CNC.SenseBlindsight",
  darkvision: "CNC.SenseDarkvision",
  tremorsense: "CNC.SenseTremorsense",
  truesight: "CNC.SenseTruesight",
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
CNC.skills = {
  acr: "CNC.SkillAcr",
  ani: "CNC.SkillAni",
  arc: "CNC.SkillArc",
  ath: "CNC.SkillAth",
  dec: "CNC.SkillDec",
  his: "CNC.SkillHis",
  ins: "CNC.SkillIns",
  itm: "CNC.SkillItm",
  inv: "CNC.SkillInv",
  med: "CNC.SkillMed",
  nat: "CNC.SkillNat",
  prc: "CNC.SkillPrc",
  prf: "CNC.SkillPrf",
  per: "CNC.SkillPer",
  rel: "CNC.SkillRel",
  slt: "CNC.SkillSlt",
  ste: "CNC.SkillSte",
  sur: "CNC.SkillSur",
};

/* -------------------------------------------- */

CNC.spellPreparationModes = {
  prepared: "CNC.SpellPrepPrepared",
  pact: "CNC.PactMagic",
  always: "CNC.SpellPrepAlways",
  atwill: "CNC.SpellPrepAtWill",
  innate: "CNC.SpellPrepInnate",
};

CNC.spellUpcastModes = ["always", "pact", "prepared"];

CNC.spellProgression = {
  none: "CNC.SpellNone",
  full: "CNC.SpellProgFull",
  half: "CNC.SpellProgHalf",
  third: "CNC.SpellProgThird",
  pact: "CNC.SpellProgPact",
  artificer: "CNC.SpellProgArt",
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
CNC.spellScalingModes = {
  none: "CNC.SpellNone",
  cantrip: "CNC.SpellCantrip",
  level: "CNC.SpellLevel",
};

/* -------------------------------------------- */

/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
CNC.weaponTypes = {
  simpleM: "CNC.WeaponSimpleM",
  simpleR: "CNC.WeaponSimpleR",
  martialM: "CNC.WeaponMartialM",
  martialR: "CNC.WeaponMartialR",
  natural: "CNC.WeaponNatural",
  improv: "CNC.WeaponImprov",
  siege: "CNC.WeaponSiege",
};

/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
CNC.weaponProperties = {
  amm: "CNC.WeaponPropertiesAmm",
  hvy: "CNC.WeaponPropertiesHvy",
  fin: "CNC.WeaponPropertiesFin",
  fir: "CNC.WeaponPropertiesFir",
  foc: "CNC.WeaponPropertiesFoc",
  lgt: "CNC.WeaponPropertiesLgt",
  lod: "CNC.WeaponPropertiesLod",
  rch: "CNC.WeaponPropertiesRch",
  rel: "CNC.WeaponPropertiesRel",
  ret: "CNC.WeaponPropertiesRet",
  spc: "CNC.WeaponPropertiesSpc",
  thr: "CNC.WeaponPropertiesThr",
  two: "CNC.WeaponPropertiesTwo",
  ver: "CNC.WeaponPropertiesVer",
};

// Spell Components
CNC.spellComponents = {
  V: "CNC.ComponentVerbal",
  S: "CNC.ComponentSomatic",
  M: "CNC.ComponentMaterial",
};

// Spell Schools
CNC.spellSchools = {
  abj: "CNC.SchoolAbj",
  con: "CNC.SchoolCon",
  div: "CNC.SchoolDiv",
  enc: "CNC.SchoolEnc",
  evo: "CNC.SchoolEvo",
  ill: "CNC.SchoolIll",
  nec: "CNC.SchoolNec",
  trs: "CNC.SchoolTrs",
};

// Spell Levels
CNC.spellLevels = {
  0: "CNC.SpellLevel0",
  1: "CNC.SpellLevel1",
  2: "CNC.SpellLevel2",
  3: "CNC.SpellLevel3",
  4: "CNC.SpellLevel4",
  5: "CNC.SpellLevel5",
  6: "CNC.SpellLevel6",
  7: "CNC.SpellLevel7",
  8: "CNC.SpellLevel8",
  9: "CNC.SpellLevel9",
};

// Spell Scroll Compendium UUIDs
CNC.spellScrollIds = {
  0: "Compendium.cnc.items.rQ6sO7HDWzqMhSI3",
  1: "Compendium.cnc.items.9GSfMg0VOA2b4uFN",
  2: "Compendium.cnc.items.XdDp6CKh9qEvPTuS",
  3: "Compendium.cnc.items.hqVKZie7x9w3Kqds",
  4: "Compendium.cnc.items.DM7hzgL836ZyUFB1",
  5: "Compendium.cnc.items.wa1VF8TXHmkrrR35",
  6: "Compendium.cnc.items.tI3rWx4bxefNCexS",
  7: "Compendium.cnc.items.mtyw4NS1s7j2EJaD",
  8: "Compendium.cnc.items.aOrinPg7yuDZEuWr",
  9: "Compendium.cnc.items.O4YbkJkLlnsgUszZ",
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
CNC.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1],
];

/* -------------------------------------------- */

// Polymorph options.
CNC.polymorphSettings = {
  keepPhysical: "CNC.PolymorphKeepPhysical",
  keepMental: "CNC.PolymorphKeepMental",
  keepSaves: "CNC.PolymorphKeepSaves",
  keepSkills: "CNC.PolymorphKeepSkills",
  mergeSaves: "CNC.PolymorphMergeSaves",
  mergeSkills: "CNC.PolymorphMergeSkills",
  keepClass: "CNC.PolymorphKeepClass",
  keepFeats: "CNC.PolymorphKeepFeats",
  keepSpells: "CNC.PolymorphKeepSpells",
  keepItems: "CNC.PolymorphKeepItems",
  keepBio: "CNC.PolymorphKeepBio",
  keepVision: "CNC.PolymorphKeepVision",
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
CNC.proficiencyLevels = {
  0: "CNC.NotProficient",
  1: "CNC.Proficient",
  0.5: "CNC.HalfProficient",
  2: "CNC.Expertise",
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
CNC.cover = {
  0: "CNC.None",
  0.5: "CNC.CoverHalf",
  0.75: "CNC.CoverThreeQuarters",
  1: "CNC.CoverTotal",
};

/* -------------------------------------------- */

// Condition Types
CNC.conditionTypes = {
  blinded: "CNC.ConBlinded",
  charmed: "CNC.ConCharmed",
  deafened: "CNC.ConDeafened",
  diseased: "CNC.ConDiseased",
  exhaustion: "CNC.ConExhaustion",
  frightened: "CNC.ConFrightened",
  grappled: "CNC.ConGrappled",
  incapacitated: "CNC.ConIncapacitated",
  invisible: "CNC.ConInvisible",
  paralyzed: "CNC.ConParalyzed",
  petrified: "CNC.ConPetrified",
  poisoned: "CNC.ConPoisoned",
  prone: "CNC.ConProne",
  restrained: "CNC.ConRestrained",
  stunned: "CNC.ConStunned",
  unconscious: "CNC.ConUnconscious",
};

// Languages
CNC.languages = {
  common: "CNC.LanguagesCommon",
  aarakocra: "CNC.LanguagesAarakocra",
  abyssal: "CNC.LanguagesAbyssal",
  aquan: "CNC.LanguagesAquan",
  auran: "CNC.LanguagesAuran",
  celestial: "CNC.LanguagesCelestial",
  deep: "CNC.LanguagesDeepSpeech",
  draconic: "CNC.LanguagesDraconic",
  druidic: "CNC.LanguagesDruidic",
  dwarvish: "CNC.LanguagesDwarvish",
  elvish: "CNC.LanguagesElvish",
  giant: "CNC.LanguagesGiant",
  gith: "CNC.LanguagesGith",
  gnomish: "CNC.LanguagesGnomish",
  goblin: "CNC.LanguagesGoblin",
  gnoll: "CNC.LanguagesGnoll",
  halfling: "CNC.LanguagesHalfling",
  ignan: "CNC.LanguagesIgnan",
  infernal: "CNC.LanguagesInfernal",
  orc: "CNC.LanguagesOrc",
  primordial: "CNC.LanguagesPrimordial",
  sylvan: "CNC.LanguagesSylvan",
  terran: "CNC.LanguagesTerran",
  cant: "CNC.LanguagesThievesCant",
  undercommon: "CNC.LanguagesUndercommon",
};

// Character Level XP Requirements
CNC.CHARACTER_EXP_LEVELS = [
  0,
  300,
  900,
  2700,
  6500,
  14000,
  23000,
  34000,
  48000,
  64000,
  85000,
  100000,
  120000,
  140000,
  165000,
  195000,
  225000,
  265000,
  305000,
  355000,
];

// Challenge Rating XP Levels
CNC.CR_EXP_LEVELS = [
  10,
  200,
  450,
  700,
  1100,
  1800,
  2300,
  2900,
  3900,
  5000,
  5900,
  7200,
  8400,
  10000,
  11500,
  13000,
  15000,
  18000,
  20000,
  22000,
  25000,
  33000,
  41000,
  50000,
  62000,
  75000,
  90000,
  105000,
  120000,
  135000,
  155000,
];

// Character Features Per Class And Level
CNC.classFeatures = ClassFeatures;

// Configure Optional Character Flags
CNC.characterFlags = {
  diamondSoul: {
    name: "CNC.FlagsDiamondSoul",
    hint: "CNC.FlagsDiamondSoulHint",
    section: "Feats",
    type: Boolean,
  },
  elvenAccuracy: {
    name: "CNC.FlagsElvenAccuracy",
    hint: "CNC.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean,
  },
  halflingLucky: {
    name: "CNC.FlagsHalflingLucky",
    hint: "CNC.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean,
  },
  initiativeAdv: {
    name: "CNC.FlagsInitiativeAdv",
    hint: "CNC.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean,
  },
  initiativeAlert: {
    name: "CNC.FlagsAlert",
    hint: "CNC.FlagsAlertHint",
    section: "Feats",
    type: Boolean,
  },
  jackOfAllTrades: {
    name: "CNC.FlagsJOAT",
    hint: "CNC.FlagsJOATHint",
    section: "Feats",
    type: Boolean,
  },
  observantFeat: {
    name: "CNC.FlagsObservant",
    hint: "CNC.FlagsObservantHint",
    skills: ["prc", "inv"],
    section: "Feats",
    type: Boolean,
  },
  powerfulBuild: {
    name: "CNC.FlagsPowerfulBuild",
    hint: "CNC.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean,
  },
  reliableTalent: {
    name: "CNC.FlagsReliableTalent",
    hint: "CNC.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean,
  },
  remarkableAthlete: {
    name: "CNC.FlagsRemarkableAthlete",
    hint: "CNC.FlagsRemarkableAthleteHint",
    abilities: ["str", "dex", "con"],
    section: "Feats",
    type: Boolean,
  },
  weaponCriticalThreshold: {
    name: "CNC.FlagsWeaponCritThreshold",
    hint: "CNC.FlagsWeaponCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20,
  },
  spellCriticalThreshold: {
    name: "CNC.FlagsSpellCritThreshold",
    hint: "CNC.FlagsSpellCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20,
  },
  meleeCriticalDamageDice: {
    name: "CNC.FlagsMeleeCriticalDice",
    hint: "CNC.FlagsMeleeCriticalDiceHint",
    section: "Feats",
    type: Number,
    placeholder: 0,
  },
};

// Configure allowed status flags
CNC.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(
  Object.keys(CNC.characterFlags)
);
