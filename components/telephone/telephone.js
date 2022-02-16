class Phone {
    constructor() {
        this.classNameActive_phone = 'phone_modal_button_active_ph'
        this.label_add_phone = 'Купить';
        this.label_remove_phone = 'Удалить';
    }

    Set_storage_phone(element, id) {
        const { push_phone, phone } = localStorageUtil_PHONE.putPhone(id);
        const pc = localStorageUtil_PC.getPC();
        const tehnic = localStorageUtil_TEHNIC.getTehnic();
        const phone_2 = localStorageUtil_PHONE.getPhone();
        const instruments = localStorageUtil_INSTRUMENTS.getInstruments();
        
        if (push_phone == true) {
            element.classList.add(this.classNameActive_phone);
            element.innerHTML = this.label_remove_phone;
        }
        else {
            element.classList.remove(this.classNameActive_phone);
            element.innerHTML = this.label_add_phone
        }
        let count = pc.length + tehnic.length + phone_2.length + instruments.length;
        header_basket.render(count);
    }

    render() {
        const phone_store = localStorageUtil_PHONE.getPhone();
        let html_catalog_phone = '';

        CATALOG_PHONE.forEach(({ id, img, text, price }) => {
            let activeClass_phone = '';
            let activeText_phone = '';


            if (phone_store.indexOf(id) == -1) {
                activeText_phone = this.label_add_phone;
            } else {
                activeClass_phone = ' ' + this.classNameActive_phone;
                activeText_phone = this.label_remove_phone;
            }


            html_catalog_phone += `
            <div class="phone_modal">
            <img class="phone_modal_img" src="${img}">
            <div class="phone_modal_text">${text}</div>
            <div class="phone_modal_pib">
                <div class="phone_modal_price">${price.toLocaleString()} Р</div>
                <input class="phone_modal_input" type="text" placeholder="1">
                <button class="phone_modal_button ${activeClass_phone}" onclick="phone_page.Set_storage_phone(this, '${id}');">${activeText_phone}</button>
        </div>
        </div>
            `;
        });

        const html_phone = `
        <div class="all_content_phone" id="all_content_phone" style="display: none">
        ${html_catalog_phone}
        </div>
        `;

        ROOT_PHONE.innerHTML = html_phone;
    }
}
const phone_page = new Phone();
phone_page.render();