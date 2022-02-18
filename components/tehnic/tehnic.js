class tehnic {
    constructor() {
        this.class_tehnic = "tehnic_modal_button_active";
        this.label_add_tehnic = 'Купить';
        this.label_remove_tehnic = 'В корзине';
    }

    //Этот метод срабатывает при нажатии на кнопку, передается 4 переменные(кнопка,id,price, массив элементов)
    Set_storage(element, id, price, count2) {
        let name = 'tehnic';
        let count;
        let i = 1;

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
        const productsStoreCount = JSON.parse(localStorage.getItem('productsTehnic'));
        let countPc = 0;
        if (pushProducts.pushStoreTehnic == true) {

            element.classList.add(this.class_tehnic);
            element.innerHTML = this.label_remove_tehnic;

        }
        else {
            location.href = "../html/basket_html.html";
        }


        //Отрисовываем количество элементов в корзине
        while (productsStoreCount.length > countPc) {
            if (productsStoreCount.indexOf(name) == -1) {
                countPc++;
            }
        }

        header_basket.render(countPc);
    }


    render() {
        const productsStore = localStorage.getItem('productsTehnic');
        let html_catalog_tehnic = '';

        CATALOG_TEHNIC.forEach(({ id, img, text, price }) => {
            let activeClass_tehnic = ' ';
            let activeText_tehnic = ' ';

            if (productsStore != null) {
            if (productsStore.indexOf(id) == -1) {
                activeText_tehnic = this.label_add_tehnic;
            } else {
                activeClass_tehnic = ' ' + this.class_tehnic;
                activeText_tehnic = this.label_remove_tehnic;
            }
        }else{ activeText_tehnic = this.label_add_tehnic;}

            html_catalog_tehnic += `
            <div class="tehnic_modal">
            <img class="tehnic_modal_img" src="${img}">
            <div class="tehnic_modal_text">${text}</div>
            <div class="tehnic_modal_pib">
                <div class="tehnic_modal_price">${price.toLocaleString()} Р</div>
                <input id="tehnic_modal_input" class="tehnic_modal_input" type="text" placeholder="1">
                <button class="tehnic_modal_button ${activeClass_tehnic}" onclick="tehnic_page.Set_storage(this, '${id}','${price}',tehnic_modal_input);">${activeText_tehnic}</button>
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