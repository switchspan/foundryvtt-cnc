/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([

    // Shared Partials
    'systems/cnc/templates/actors/parts/active-effects.html',

    // Actor Sheet Partials
    'systems/cnc/templates/actors/parts/actor-traits.html',
    'systems/cnc/templates/actors/parts/actor-inventory.html',
    'systems/cnc/templates/actors/parts/actor-features.html',
    'systems/cnc/templates/actors/parts/actor-spellbook.html',

    // Item Sheet Partials
    'systems/cnc/templates/items/parts/item-action.html',
    'systems/cnc/templates/items/parts/item-activation.html',
    'systems/cnc/templates/items/parts/item-description.html',
    'systems/cnc/templates/items/parts/item-mountable.html'
  ])
}
