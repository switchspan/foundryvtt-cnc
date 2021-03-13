/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class CncItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    // Get the Item's data
    const itemData = this.data;

    console.log(`TLG | Preparing item data`);
    console.log(itemData)

    const actorData = this.actor ? this.actor.data : {};
    const data = itemData.data;
  }
}
