class Pc {
    constructor() {
        this.classNameActive = 'pc_modal_button_active';
        this.label_add = 'Купить';
        this.label_remove = 'В корзине';
    }

    //Этот метод срабатывает при нажатии на кнопку, передается 4 переменные(кнопка,id,price, массив элементов)
    Set_storage(element, id, price, count2) {
        let name = 'pc';
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
        const productsStoreCount = JSON.parse(localStorage.getItem('productsPc'));
        let countPc = 0;
        if (pushProducts.pushStore == true) {

            element.classList.add(this.classNameActive);
            element.innerHTML = this.label_remove;

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
        const productsStore = localStorage.getItem('productsPc');
        let html_catalog_pc = '';


        CATALOG.forEach(({ id, img, text, price }) => {
            let activeClass = ' ';
            let activeText = ' ';

            //Проверка элементов на уже ранее добавленные в корзину. Проверка по(id)
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
                <div  class="pc_modal_price">${price.toLocaleString()} Р</div>
                <input id="pc_modal_input" class="pc_modal_input" type="text" placeholder="1">
                <button class="pc_modal_button ${activeClass}" onclick="pc_page.Set_storage(this, '${id}','${price}',pc_modal_input);" >${activeText}</button>
        </div>
        </div>

        <script>
        SetPush(){

        }
        </script>
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