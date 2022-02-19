class instruments {
    constructor() {
        this.class_instruments = "instruments_modal_button_active";
        this.label_add_instruments = 'Купить';
        this.label_remove_instruments = 'В корзине';
    }

    //Этот метод срабатывает при нажатии на кнопку, передается 4 переменные(кнопка,id,price, массив элементов)
    Set_storage(element, id, price, count2) {
        let name = 'instruments',count,i = 1;

        //Поиск элемента соответсующего id
        for (i; i < count2.length + 1; i++) {
            if (id.indexOf(i) !== -1) {
                count = count2[i - 1];
            }
        }

        //Считываем количество положеного в корзину товара.
        if (count.value == '') {
            count2 = 1;
        }
        else {
            count2 = count.value;
        }

        //Отправляем товар в класс
        const pushProducts = LocalStorageUtilPRODUCTS.putProducts(name, id, price, Number(count2));
        if (pushProducts.pushStoreInstr == true) {
            element.classList.add(this.class_instruments);
            element.innerHTML = this.label_remove_instruments;
        }
        else {
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
        const productsStore = localStorage.getItem('productsInstr');
        let html_catalog_instruments = '';

        CATALOG_INSTRUMENTS.forEach(({ id, img, text, price }) => {

            let activeClass_instruments = ' ';
            let activeText_instruments = ' ';

            if (productsStore != null) {
            if (productsStore.indexOf(id) == -1) {
                activeText_instruments = this.label_add_instruments;
            } else {
                activeClass_instruments = ' ' + this.class_instruments;
                activeText_instruments = this.label_remove_instruments;
            }
        }else{ activeText_instruments = this.label_add_instruments;}

            html_catalog_instruments += `
            <div class="instruments_modal">
            <img class="instruments_modal_img" src="${img}">
            <div class="instruments_modal_text">${text}</div>
            <div class="instruments_modal_pib">
                <div class="instruments_modal_price">${price.toLocaleString()} Р</div>
                <input id="instruments_modal_input" class="instruments_modal_input" type="text" placeholder="1">
                <button class="instruments_modal_button ${activeClass_instruments}" onclick="instruments_page.Set_storage(this, '${id}','${price}',instruments_modal_input);">${activeText_instruments}</button>
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