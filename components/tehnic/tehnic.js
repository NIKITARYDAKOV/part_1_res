class tehnic {
    constructor() {
        this.class_tehnic = "tehnic_modal_button_active";
        this.label_add_tehnic = 'Купить';
        this.label_remove_tehnic = 'Удалить';
    }

    Set_storage_tehnic(element, id) {

        const {push_tehnic, tehnic} = localStorageUtil_TEHNIC.putTehnic(id);
        const pc = localStorageUtil_PC.getPC();
        const tehnic_2 = localStorageUtil_TEHNIC.getTehnic();
        const phone = localStorageUtil_PHONE.getPhone();
        const instruments = localStorageUtil_INSTRUMENTS.getInstruments();
        if (push_tehnic==true) {

            element.classList.add(this.class_tehnic);
            element.innerHTML = this.label_remove_tehnic;

        }
        else {

            element.classList.remove(this.class_tehnic);
            element.innerHTML = this.label_add_tehnic;

        }
        let count = pc.length + tehnic_2.length + phone.length + instruments.length;
        header_basket.render(count);
    }


    render() {
        const tehnic_store = localStorageUtil_TEHNIC.getTehnic();
        let html_catalog_tehnic = '';

        CATALOG_TEHNIC.forEach(({ id, img, text, price }) => {
            let activeClass_tehnic = ' ';
            let activeText_tehnic = ' ';


            if (tehnic_store.indexOf(id) == -1) {
                activeText_tehnic = this.label_add_tehnic;
            } else {
                activeClass_tehnic = ' ' + this.class_tehnic;
                activeText_tehnic = this.label_remove_tehnic;
            }

            html_catalog_tehnic += `
            <div class="tehnic_modal">
            <img class="tehnic_modal_img" src="${img}">
            <div class="tehnic_modal_text">${text}</div>
            <div class="tehnic_modal_pib">
                <div class="tehnic_modal_price">${price.toLocaleString()} Р</div>
                <input class="tehnic_modal_input" type="text" placeholder="1">
                <button class="tehnic_modal_button ${activeClass_tehnic}" onclick="tehnic_page.Set_storage_tehnic(this, '${id}');">${activeText_tehnic}</button>
        </div>
        </div>
            `;
        });

        const html_tehnic = `
        <div class="all_content_tehnic" id="all_content_tehnic" style="display: none">
        ${html_catalog_tehnic}
        </div>
        `;
        ROOT_TEHNIC.innerHTML = html_tehnic;
    }
}
const tehnic_page = new tehnic();
tehnic_page.render();