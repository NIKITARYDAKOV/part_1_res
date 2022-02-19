class Phone {
    constructor() {
        this.classNameActive_phone = 'phone_modal_button_active_ph'
        this.label_add_phone = 'Купить';
        this.label_remove_phone = 'В корзине';
    }

    Set_storage(element, id, price, count2) {
        let name = 'phone', count, i = 1;


        for (i; i < count2.length + 1; i++) {
            if (id.indexOf(i) !== -1) {
                count = count2[i - 1];
            }
        }

        if (count.value == '') {
            count2 = 1;
        } else {
            count2 = count.value;
        }

        const pushProducts = LocalStorageUtilPRODUCTS.putProducts(name, id, price, Number(count2));
        if (pushProducts.pushStorePhone == true) {
            element.classList.add(this.classNameActive_phone);
            element.innerHTML = this.label_remove_phone;
        } else {
            location.href = "../html/basket_html.html";

        }

        
        const productPc = LocalStorageUtilPRODUCTS.getProductsPc();
        const productPhone = LocalStorageUtilPRODUCTS.getProductsPhone();
        const productTehnic = LocalStorageUtilPRODUCTS.getProductsTehnic();
        const productInstr = LocalStorageUtilPRODUCTS.getProductsInstr();
        let countPc = productPc.length + productPhone.length + productTehnic.length + productInstr.length;
        header_basket.render(countPc);

    }

    render() {
        const productsStore = localStorage.getItem('productsPhone');
        let html_catalog_phone = '';

        CATALOG_PHONE.forEach(({ id, img, text, price }) => {
            let activeClass_phone = '';
            let activeText_phone = '';

            if (productsStore != null) {
                if (productsStore.indexOf(id) == -1) {
                    activeText_phone = this.label_add_phone;
                }
                else {
                    activeClass_phone = ' ' + this.classNameActive_phone;
                    activeText_phone = this.label_remove_phone;
                }
            } else {
                activeText_phone = this.label_add_phone;
            }


            html_catalog_phone += `
            <div class="phone_modal">
            <img class="phone_modal_img" src="${img}">
            <div class="phone_modal_text">${text}</div>
            <div class="phone_modal_pib">
                <div class="phone_modal_price">${price.toLocaleString()} Р</div>
                <input id ="phone_modal_input"class="phone_modal_input" type="text" placeholder="1">
                <button class="phone_modal_button ${activeClass_phone}" onclick="phone_page.Set_storage(this, '${id}','${price}',phone_modal_input);">${activeText_phone}</button>
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