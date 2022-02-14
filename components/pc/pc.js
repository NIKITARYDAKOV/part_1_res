class Pc {
    constructor() {
        this.classNameActive = 'pc_modal_button_active';
        this.label_add = 'Купить';
        this.label_remove = 'Удалить';
    }

    Set_storage(element, id) {
        const { pushPC } = localStorageUtil_PC.putPC(id);
        const pc = localStorageUtil_PC.getPC();
        const tehnic = localStorageUtil_TEHNIC.getTehnic();
        const phone = localStorageUtil_PHONE.getPhone();
        const instruments = localStorageUtil_INSTRUMENTS.getInstruments();

        if (pushPC == true) {

            element.classList.add(this.classNameActive);
            element.innerHTML = this.label_remove;

        }
        else {

            element.classList.remove(this.classNameActive);
            element.innerHTML = this.label_add;
            
        }
        let count = pc.length + tehnic.length + phone.length + instruments.length;
        header_basket.render(count);
    }
    render() {
        const pc_store = localStorageUtil_PC.getPC();
        let html_catalog_pc = '';

        CATALOG.forEach(({ id, img, text, price }) => {
            let activeClass = ' ';
            let activeText = ' ';

            if (pc_store.indexOf(id) == -1) {
                activeText = this.label_add;
            }
            else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.label_remove;
            }

            html_catalog_pc += `
            <div class="pc_modal">
            <img class="pc_modal_img" src="${img}">
            <div class="pc_modal_text">${text}</div>
            <div class="pc_modal_pib">
                <div class="pc_modal_price">${price.toLocaleString()} Р</div>
                <input class="pc_modal_input" type="text" placeholder="1">
                <button class="pc_modal_button ${activeClass}" onclick="pc_page.Set_storage(this, '${id}');" >${activeText}</button>
        </div>
        </div>
            `;
        });

        const html_pc = `
        <div class="all_content_pc" id="all_content_pc" style="display: flex">
        ${html_catalog_pc}
        </div>
        `;

        ROOT_PC.innerHTML = html_pc;
    }
}
const pc_page = new Pc();
pc_page.render();