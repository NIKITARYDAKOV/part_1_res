class Pc {
    constructor() {
        this.classNameActive = 'pc_modal_button_active';
        this.label_add = 'Купить';
        this.label_remove = 'В корзине';
    }

    Set_storage(element, id, price) {
        let name = 'pc';
        const pushProducts = LocalStorageUtilPRODUCTS.putProducts(name, id, price);
        const productsStoreCount = JSON.parse(localStorage.getItem('products'));
        let countPc = 0;
        if (pushProducts.pushStore == true) {

            element.classList.add(this.classNameActive);
            element.innerHTML = this.label_remove;

        }
        else {
            location.href = "../html/basket_html.html";

        }

        while (productsStoreCount.length > countPc) {
            if (productsStoreCount.indexOf(name) == -1) {
                countPc++;
            }
        }
        header_basket.render(countPc);
    }
    render() {
        const productsStore = localStorage.getItem('products');
        let html_catalog_pc = '';


        CATALOG.forEach(({ id, img, text, price }) => {
            let activeClass = ' ';
            let activeText = ' ';
            if (productsStore != null) {
                if (productsStore.indexOf(id) == -1) {
                    activeText = this.label_add;
                }
                else {
                    activeClass = ' ' + this.classNameActive;
                    activeText = this.label_remove;
                }
            } else {
                activeText = this.label_add;
            }

            html_catalog_pc += `
            <div class="pc_modal">
            <img class="pc_modal_img" src="${img}">
            <div class="pc_modal_text">${text}</div>
            <div class="pc_modal_pib">
                <div class="pc_modal_price">${price.toLocaleString()} Р</div>
                <input class="pc_modal_input" type="text" placeholder="1">
                <button class="pc_modal_button ${activeClass}" onclick="pc_page.Set_storage(this, '${id}','${price}');" >${activeText}</button>
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