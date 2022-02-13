class instruments {
    constructor() {
        this.class_instruments = "instruments_modal_button_active";
        this.label_add_instruments = 'Купить';
        this.label_remove_instruments = 'Удалить';
    }

    Set_storage_instruments(element, id) {

        const { push_instruments, instruments } = localStorageUtil_INSTRUMENTS.putInstruments(id);
        const pc = localStorageUtil_PC.getPC();
        const tehnic = localStorageUtil_TEHNIC.getTehnic();
        const phone = localStorageUtil_PHONE.getPhone();
        const instruments_2 = localStorageUtil_INSTRUMENTS.getInstruments();
        if (push_instruments==true) {

            element.classList.add(this.class_instruments);
            element.innerHTML = this.label_remove_instruments;

        }
        else {

            element.classList.remove(this.class_instruments);
            element.innerHTML = this.label_add_instruments;

        }
        let count = pc.length + tehnic.length + phone.length + instruments_2.length;
        header_basket.render(count);
    }


    render() {
        const instruments_store = localStorageUtil_INSTRUMENTS.getInstruments();
        let html_catalog_instruments = '';

        CATALOG_INSTRUMENTS.forEach(({ id, img, text, price }) => {
            let activeClass_instruments = ' ';
            let activeText_instruments = ' ';


            if (instruments_store.indexOf(id) == -1) {
                activeText_instruments = this.label_add_instruments;
            } else {
                activeClass_instruments = ' ' + this.class_instruments;
                activeText_instruments = this.label_remove_instruments;
            }

            html_catalog_instruments += `
            <div class="instruments_modal">
            <img class="instruments_modal_img" src="${img}">
            <div class="instruments_modal_text">${text}</div>
            <div class="instruments_modal_pib">
                <div class="instruments_modal_price">${price}</div>
                <input class="instruments_modal_input" type="text" placeholder="1">
                <button class="instruments_modal_button ${activeClass_instruments}" onclick="instruments_page.Set_storage_instruments(this, '${id}');">${activeText_instruments}</button>
        </div>
        </div>
            `;
        });

        const html_instruments = `
        <div class="all_content_instruments" id="all_content_instruments" style="display: none">
        ${html_catalog_instruments}
        </div>
        `;

        ROOT_INSTRUMENTS.innerHTML = html_instruments;
    }
}
const instruments_page = new instruments();
instruments_page.render();