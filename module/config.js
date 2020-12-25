// Namespace DCC Configuration Values
const CNC = {}

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
                                  
_______________________________`

/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
CNC.abilities = {
  str: 'CNC.AbilityStr',
  agl: 'CNC.AbilityAgl',
  sta: 'CNC.AbilitySta',
  per: 'CNC.AbilityPer',
  int: 'CNC.AbilityInt',
  lck: 'CNC.AbilityLck'
}

/**
 * The set of Ability Score Modifiers used within the system
 * @type {Object}
 */
CNC.abilities.modifiers = {
  1: -4,
  2: -3,
  3: -3,
  4: -2,
  5: -2,
  6: -1,
  7: -1,
  8: -1,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 1,
  14: 1,
  15: 1,
  16: 2,
  17: 2,
  18: 3,
  19: 3,
  20: 4,
  21: 4,
  22: 5,
  23: 5,
  24: 6
}

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
CNC.alignments = {
  lg: 'CNC.AlignmentLG',
  ln: 'CNC.AlignmentLN',
  le: 'CNC.AlignmentLE',
  ng: 'CNC.AlignmentNG',
  n: 'CNC.AlignmentN',
  ne: 'CNC.AlignmentNE',
  cg: 'CNC.AlignmentCG',
  cn: 'CNC.AlignmentCN',
  ce: 'CNC.AlignmentCE'
}

/* -------------------------------------------- */

/**
 * Character saving throws
 * @type {Object}
 */
CNC.saves = {
  ref: 'CNC.SavesReflex',
  frt: 'CNC.SavesFortitude',
  wil: 'CNC.SavesWill'
}

/* -------------------------------------------- */

/**
 * Item entity types
 * @type {Object}
 */
CNC.items = {
  weapon: 'CNC.Weapon',
  ammunition: 'CNC.Ammunition',
  armor: 'CNC.Armor',
  equipment: 'CNC.Equipment',
  mount: 'CNC.Mount',
  spell: 'CNC.Spell',
  skill: 'CNC.Skill',
  treasure: 'CNC.Treasure'
}

/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in D&D5e
 * @type {Object}
 */
CNC.timePeriods = {
  inst: 'CNC.TimeInst',
  turn: 'CNC.TimeTurn',
  round: 'CNC.TimeRound',
  minute: 'CNC.TimeMinute',
  hour: 'CNC.TimeHour',
  day: 'CNC.TimeDay',
  month: 'CNC.TimeMonth',
  year: 'CNC.TimeYear',
  perm: 'CNC.TimePerm',
  spec: 'CNC.Special'
}

/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
CNC.abilityActivationTypes = {
  none: 'CNC.None',
  action: 'CNC.Action',
  minute: CNC.timePeriods.minute,
  hour: CNC.timePeriods.hour,
  day: CNC.timePeriods.day,
  special: CNC.timePeriods.spec
}

/* -------------------------------------------- */

// Creature Sizes
CNC.actorSizes = {
  tiny: 'CNC.SizeTiny',
  sm: 'CNC.SizeSmall',
  med: 'CNC.SizeMedium',
  lg: 'CNC.SizeLarge',
  huge: 'CNC.SizeHuge',
  grg: 'CNC.SizeGargantuan'
}

CNC.tokenSizes = {
  tiny: 1,
  sm: 1,
  med: 1,
  lg: 2,
  huge: 3,
  grg: 4
}

/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
CNC.equipmentTypes = {
  light: 'CNC.EquipmentLight',
  medium: 'CNC.EquipmentMedium',
  heavy: 'CNC.EquipmentHeavy',
  bonus: 'CNC.EquipmentBonus',
  natural: 'CNC.EquipmentNatural',
  shield: 'CNC.EquipmentShield',
  clothing: 'CNC.EquipmentClothing'
}

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the CNC system
 * @type {Object}
 */
CNC.currencies = {
  pp: 'CNC.CurrencyPP',
  ep: 'CNC.CurrencyEP',
  gp: 'CNC.CurrencyGP',
  sp: 'CNC.CurrencySP',
  cp: 'CNC.CurrencyCP'
}

/**
 * The currencies supported by the CNC system ranked by value from low to high
 * @type {Array}
 */
CNC.currencyRank = [
  'cp', 'sp', 'gp', 'ep', 'pp'
]

/**
 * The currencies supported by the CNC system expressed in terms of the lowest denomination
 * @type {Object}
 */
CNC.currencyValue = {
  pp: 1000,
  gp: 100,
  sp: 10,
  cp: 1
}

/* -------------------------------------------- */

CNC.distanceUnits = {
  none: 'CNC.None',
  self: 'CNC.DistSelf',
  touch: 'CNC.DistTouch',
  ft: 'CNC.DistFt',
  mi: 'CNC.DistMi',
  spec: 'CNC.Special',
  any: 'CNC.DistAny'
}

/* -------------------------------------------- */

/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
CNC.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15
}

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D5e
 * @type {Object}
 */
CNC.targetTypes = {
  none: 'CNC.None',
  self: 'CNC.TargetSelf',
  creature: 'CNC.TargetCreature',
  ally: 'CNC.TargetAlly',
  enemy: 'CNC.TargetEnemy',
  object: 'CNC.TargetObject',
  space: 'CNC.TargetSpace',
  radius: 'CNC.TargetRadius',
  sphere: 'CNC.TargetSphere',
  cylinder: 'CNC.TargetCylinder',
  cone: 'CNC.TargetCone',
  square: 'CNC.TargetSquare',
  cube: 'CNC.TargetCube',
  line: 'CNC.TargetLine',
  wall: 'CNC.TargetWall'
}

/* -------------------------------------------- */

/**
 * Map the subset of target types which produce a template area of effect
 * The keys are CNC target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
CNC.areaTargetTypes = {
  cone: 'cone',
  cube: 'rect',
  cylinder: 'circle',
  line: 'ray',
  radius: 'circle',
  sphere: 'circle',
  square: 'rect',
  wall: 'ray'
}

/* -------------------------------------------- */

// Healing Types
CNC.healingTypes = {
  healing: 'CNC.Healing',
  temphp: 'CNC.HealingTemp'
}

/* -------------------------------------------- */

/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
CNC.hitDieTypes = ['d4', 'd6', 'd8', 'd10', 'd12']

/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
CNC.senses = {
  iv: 'CNC.SenseIV',
  us: 'CNC.SenseUS'
}

// Spell Levels
CNC.spellLevels = {
  1: 'CNC.SpellLevel1',
  2: 'CNC.SpellLevel2',
  3: 'CNC.SpellLevel3',
  4: 'CNC.SpellLevel4',
  5: 'CNC.SpellLevel5',
  6: 'CNC.SpellLevel6'
}

/* -------------------------------------------- */

// Condition Types
CNC.conditionTypes = {
  blinded: 'CNC.ConBlinded',
  charmed: 'CNC.ConCharmed',
  deafened: 'CNC.ConDeafened',
  diseased: 'CNC.ConDiseased',
  exhaustion: 'CNC.ConExhaustion',
  frightened: 'CNC.ConFrightened',
  grappled: 'CNC.ConGrappled',
  incapacitated: 'CNC.ConIncapacitated',
  invisible: 'CNC.ConInvisible',
  paralyzed: 'CNC.ConParalyzed',
  petrified: 'CNC.ConPetrified',
  poisoned: 'CNC.ConPoisoned',
  prone: 'CNC.ConProne',
  restrained: 'CNC.ConRestrained',
  stunned: 'CNC.ConStunned',
  unconscious: 'CNC.ConUnconscious'
}

// Languages
CNC.languages = {
  common: 'CNC.LanguagesCommon',
  draconic: 'CNC.LanguagesDraconic',
  dwarvish: 'CNC.LanguagesDwarvish',
  elvish: 'CNC.LanguagesElvish',
  giant: 'CNC.LanguagesGiant',
  goblin: 'CNC.LanguagesGoblin',
  gnoll: 'CNC.LanguagesGnoll',
  halfling: 'CNC.LanguagesHalfling',
  orc: 'CNC.LanguagesOrc',
  cant: 'CNC.LanguagesThievesCant'
}

// Character Level XP Requirements
CNC.CHARACTER_EXP_LEVELS = [
  0, 10, 50, 110, 190, 290, 410, 550, 710, 890, 1090
]

// The dice chain
CNC.DICE_CHAIN = [
  3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 30
]

// Disapproval tables - updated at runtime from compendiums
CNC.disapprovalTables = {}

export default CNC
