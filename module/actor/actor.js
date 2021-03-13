/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class CncActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    switch (actorData.type) {
      case 'character':
        this._prepareCharacterData(actorData);
        break;
      case 'npc':
        this._prepareNpcData(actorData)
        break;
      default:
        break;
    }

  }

  /**
   * Prepare Character type specific data
   * @param actorData
   * @private
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;

    console.log(`TLG | Preparing character data`);
    console.log(actorData);
    // Make modifications to data here. For example:

    // Loop through ability scores, and add their modifiers to our sheet output.
    for (let [key, attribute] of Object.entries(data.attributes)) {
      // Calculate the modifier using d20 rules.
      attribute.mod = Math.floor((attribute.value - 10) / 2);
    }
  }

  /**
   * Prepare NPC type specific data
   * @param actorData
   * @private
   */
  _prepareNpcData(actorData) {
    const data = actorData.data;

    console.log(`TLG | Preparing npc data`);
    // Make modifications to data here.
  }

}
