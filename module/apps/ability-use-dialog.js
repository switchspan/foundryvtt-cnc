/**
 * A specialized Dialog subclass for ability usage
 * @type {Dialog}
 */
export default class AbilityUseDialog extends Dialog {
  constructor(item, dialogData={}, options={}) {
    super(dialogData, options);
    this.options.classes = ["cnc", "dialog"];

    /**
     * Store a reference to the Item entity being used
     * @type {Item5e}
     */
    this.item = item;
  }

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * A constructor function which displays the Spell Cast Dialog app for a given Actor and Item.
   * Returns a Promise which resolves to the dialog FormData once the workflow has been completed.
   * @param {Item5e} item
   * @return {Promise}
   */
  static async create(item) {
    if ( !item.isOwned ) throw new Error("You cannot display an ability usage dialog for an unowned item");

    // Prepare data
    const actorData = item.actor.data.data;
    const itemData = item.data.data;
    const uses = itemData.uses || {};
    const quantity = itemData.quantity || 0;
    const recharge = itemData.recharge || {};
    const recharges = !!recharge.value;
    const sufficientUses = (quantity > 0 && !uses.value) || uses.value > 0; 

    // Prepare dialog form data
    const data = {
      item: item.data,
      title: game.i18n.format("CNC.AbilityUseHint", item.data),
      note: this._getAbilityUseNote(item.data, uses, recharge),
      consumeSpellSlot: false,
      consumeRecharge: recharges,
      consumeResource: !!itemData.consume.target,
      consumeUses: uses.max,
      canUse: recharges ? recharge.charged : sufficientUses,
      createTemplate: game.user.can("TEMPLATE_CREATE") && item.hasAreaTarget,
      errors: []
    };
    if ( item.data.type === "spell" ) this._getSpellData(actorData, itemData, data);

    // Render the ability usage template
    const html = await renderTemplate("systems/cnc/templates/apps/ability-use.html", data);

    // Create the Dialog and return data as a Promise
    const icon = data.isSpell ? "fa-magic" : "fa-fist-raised";
    const label = game.i18n.localize("CNC.AbilityUse" + (data.isSpell ? "Cast" : "Use"));
    return new Promise((resolve) => {
      const dlg = new this(item, {
        title: `${item.name}: Usage Configuration`,
        content: html,
        buttons: {
          use: {
            icon: `<i class="fas ${icon}"></i>`,
            label: label,
            callback: html => {
              const fd = new FormDataExtended(html[0].querySelector("form"));
              resolve(fd.toObject());
            }
          }
        },
        default: "use",
        close: () => resolve(null)
      });
      dlg.render(true);
    });
  }

  /* -------------------------------------------- */
  /*  Helpers                                     */
  /* -------------------------------------------- */

  /**
   * Get dialog data related to limited spell slots
   * @private
   */
  static _getSpellData(actorData, itemData, data) {

    // Determine whether the spell may be up-cast
    const lvl = itemData.level;
    const consumeSpellSlot = (lvl > 0) && CONFIG.CNC.spellUpcastModes.includes(itemData.preparation.mode);

    // If can't upcast, return early and don't bother calculating available spell slots
    if (!consumeSpellSlot) {
      mergeObject(data, { isSpell: true, consumeSpellSlot });
      return;
    }

    // Determine the levels which are feasible
    let lmax = 0;
    const spellLevels = Array.fromRange(10).reduce((arr, i) => {
      if ( i < lvl ) return arr;
      const label = CONFIG.CNC.spellLevels[i];
      const l = actorData.spells["spell"+i] || {max: 0, override: null};
      let max = parseInt(l.override || l.max || 0);
      let slots = Math.clamped(parseInt(l.value || 0), 0, max);
      if ( max > 0 ) lmax = i;
      arr.push({
        level: i,
        label: i > 0 ? game.i18n.format('CNC.SpellLevelSlot', {level: label, n: slots}) : label,
        canCast: max > 0,
        hasSlots: slots > 0
      });
      return arr;
    }, []).filter(sl => sl.level <= lmax);

    // If this character has pact slots, present them as an option for casting the spell.
    const pact = actorData.spells.pact;
    if (pact.level >= lvl) {
      spellLevels.push({
        level: 'pact',
        label: `${game.i18n.format('CNC.SpellLevelPact', {level: pact.level, n: pact.value})}`,
        canCast: true,
        hasSlots: pact.value > 0
      });
    }
    const canCast = spellLevels.some(l => l.hasSlots);

    // Return merged data
    data = mergeObject(data, { isSpell: true, consumeSpellSlot, spellLevels });
    if ( !canCast ) data.errors.push("CNC.SpellCastNoSlots");
  }

  /* -------------------------------------------- */

  /**
   * Get the ability usage note that is displayed
   * @private
   */
  static _getAbilityUseNote(item, uses, recharge) {

    // Zero quantity
    const quantity = item.data.quantity;
    if ( quantity <= 0 ) return game.i18n.localize("CNC.AbilityUseUnavailableHint");

    // Abilities which use Recharge
    if ( !!recharge.value ) {
      return game.i18n.format(recharge.charged ? "CNC.AbilityUseChargedHint" : "CNC.AbilityUseRechargeHint", {
        type: item.type,
      })
    }

    // Does not use any resource
    if ( !uses.per || !uses.max ) return "";

    // Consumables
    if ( item.type === "consumable" ) {
      let str = "CNC.AbilityUseNormalHint";
      if ( uses.value > 1 ) str = "CNC.AbilityUseConsumableChargeHint";
      else if ( item.data.quantity === 1 && uses.autoDestroy ) str = "CNC.AbilityUseConsumableDestroyHint";
      else if ( item.data.quantity > 1 ) str = "CNC.AbilityUseConsumableQuantityHint";
      return game.i18n.format(str, {
        type: item.data.consumableType,
        value: uses.value,
        quantity: item.data.quantity,
      });
    }

    // Other Items
    else {
      return game.i18n.format("CNC.AbilityUseNormalHint", {
        type: item.type,
        value: uses.value,
        max: uses.max,
        per: CONFIG.CNC.limitedUsePeriods[uses.per]
      });
    }
  }

  /* -------------------------------------------- */

  static _handleSubmit(formData, item) {

  }
}
