/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class CncItemSheetClass extends ItemSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["cnc", "sheet", "item"],
            template: "systems/cnc/templates/items/class-sheet.hbs",
            width: 520,
            height: 480,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
        });
    }

    /** @override */
    // get template() {
    //     const path = "systems/cnc/templates/items";
    //     // Return a single sheet for all item types.
    //     return `${path}/class-sheet.hbs`;
    //     // Alternatively, you could use the following return statement to do a
    //     // unique item sheet by type, like `weapon-sheet.html`.
    //
    //     // return `${path}/${this.item.data.type}-sheet.html`;
    // }

    /* -------------------------------------------- */

    /** @override */
    getData() {
        const data = super.getData();
        data.config = CONFIG.CNC;
        console.log("TLG | Item sheet data: ");
        console.log(data);
        let canMulticlass = game.settings.get("cnc", "multiClassingEnabled");
        console.log(`TLG | Multi-classing enabled: ${canMulticlass}`);
        return data;
    }

    /* -------------------------------------------- */

    /** @override */
    setPosition(options = {}) {
        const position = super.setPosition(options);
        const sheetBody = this.element.find(".sheet-body");
        const bodyHeight = position.height - 192;
        sheetBody.css("height", bodyHeight);
        return position;
    }

    /* -------------------------------------------- */

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Everything below here is only needed if the sheet is editable
        if (!this.options.editable) return;

        // Roll handlers, click handlers, etc. would go here.
    }
}
