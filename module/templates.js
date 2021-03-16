/**
 * Register Handlebars helpers to use in the templates
 */
Handlebars.registerHelper('cnc-safeVal', (value, fallback) => {
  return new Handlebars.SafeString(value || fallback);
});

Handlebars.registerHelper('cnc-add', (value, toAdd) => {
  return new Handlebars.SafeString(String(value + toAdd));
});

Handlebars.registerHelper('cnc-isEmpty', (input) => {
  if (!input) {
    return true;
  }
  if (input instanceof Array) {
    return input.length < 1;
  }
  if (input instanceof Set) {
    return input.size < 1;
  }
  return isObjectEmpty(input);
});


/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  console.log('TLG | Preloading handlebars templates');
  return loadTemplates([

    // Shared Partials
    "systems/cnc/templates/actors/parts/active-effects.hbs",

    // Actor Sheet Partials
    // "systems/cnc/templates/actors/parts/actor-traits.html",
    "systems/cnc/templates/actors/parts/sheet-header.hbs",
    "systems/cnc/templates/actors/parts/sheet-sidebar.hbs",
    "systems/cnc/templates/actors/parts/actor-inventory.hbs",
    "systems/cnc/templates/actors/parts/actor-features.hbs",
    "systems/cnc/templates/actors/parts/actor-spellbook.hbs",
    "systems/cnc/templates/actors/parts/actor-actions-list.hbs",

    // Item Sheet Partials
    // "systems/cnc/templates/items/parts/item-action.html",
    // "systems/cnc/templates/items/parts/item-activation.html",
    // "systems/cnc/templates/items/parts/item-description.html",
    // "systems/cnc/templates/items/parts/item-mountable.html"
  ]);
};
