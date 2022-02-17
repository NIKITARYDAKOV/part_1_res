class Phone {
    constructor() {
        this.classNameActive_phone = 'phone_modal_button_active_ph'
        this.label_add_phone = 'Купить';
        this.label_remove_phone = 'В корзине';
    }

    Set_storage(element, id, price, count2) {
        let name = 'phone';
        let count;
        let i = 1;
        for (i; i < count2.length + 1; i++) {
            if (id.indexOf(i) !== -1) {
                count = count2[i - 1];
            }
        }
        if (count.value == '') {
            count2 = 1;
        }
        else {
            count2 = count.value;
        }
        const pushProducts = LocalStorageUtilPRODUCTS.putProducts(name, id, price, Number(count2));
        const productsStoreCount = JSON.parse(localStorage.getItem('products'));
        let countPhone = 0;
        if (pushProducts.pushStore == true) {
            element.classList.add(this.classNameActive_phone);
            element.innerHTML = this.label_remove_phone;
        }
        else {
            location.href = "../html/basket_html.html";

        }
        while (productsStoreCount.length > countPhone) {
            if (productsStoreCount.indexOf(name) == -1) {
                countPhone++;
            }
        }
        header_basket.render(countPhone);
    }

    render() {
        const productsStore = localStorage.getItem('products');
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
            } else 
            {
                activeText_phone = this.label_add_phone;
            }


            html_catalog_phone += `
            <div class="phone_modal">
            <img class="phone_modal_img" src="${img}">
            <div class="phone_modal_text">${text}</div>
            <div class="phone_modal_pib">
                <div class="phone_modal_price">${price.toLocaleString()} Р</div>
                <input class="phone_modal_input" type="text" placeholder="1">
                <button class="phone_modal_button ${activeClass_phone}" onclick="phone_page.Set_storage(this, '${id}','${price}',pc_modal_input);">${activeText_phone}</button>
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