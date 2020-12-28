/**
 * A helper Dialog subclass for completing a long rest
 * @extends {Dialog}
 */
export default class LongRestDialog extends Dialog {
  constructor (actor, dialogData = {}, options = {}) {
    super(dialogData, options)
    this.actor = actor
  }

  /* -------------------------------------------- */

  /** @override */
  static get defaultOptions () {
    return mergeObject(super.defaultOptions, {
      template: 'systems/cnc/templates/apps/long-rest.html',
      classes: ['cnc', 'dialog']
    })
  }

  /* -------------------------------------------- */

  /** @override */
  getData () {
    const data = super.getData()
    const variant = game.settings.get('cnc', 'restVariant')
    data.promptNewDay = variant !== 'gritty' // It's always a new day when resting 1 week
    data.newDay = variant === 'normal' // It's probably a new day when resting normally (8 hours)
    return data
  }

  /* -------------------------------------------- */

  /**
   * A helper constructor function which displays the Long Rest confirmation dialog and returns a Promise once it's
   * workflow has been resolved.
   * @param {ActorCnc} actor
   * @return {Promise}
   */
  static async longRestDialog ({ actor } = {}) {
    return new Promise((resolve, reject) => {
      const dlg = new this(actor, {
        title: 'Long Rest',
        buttons: {
          rest: {
            icon: '<i class="fas fa-bed"></i>',
            label: 'Rest',
            callback: html => {
              let newDay = false
              if (game.settings.get('cnc', 'restVariant') === 'normal') { newDay = html.find('input[name="newDay"]')[0].checked } else if (game.settings.get('cnc', 'restVariant') === 'gritty') { newDay = true }
              resolve(newDay)
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: 'Cancel',
            callback: reject
          }
        },
        default: 'rest',
        close: reject
      })
      dlg.render(true)
    })
  }
}
