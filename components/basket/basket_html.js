
class Basket_catalog {

    // Если ввели промокод, и проверка на ранее введеный промо
    Promokod() {
        const getSell = LocalStorageUtil_SELL.getSell();
        const promo = LocalStorageUtil_PROMO.getPromo();
        allSum = getSell[0];
        let input = document.getElementById("input_promo").value;
        let text = document.getElementById("text_sum");
        if (input == "SELL") {
            if (promo.length == 0) {
                if (promo[0] !== 'done') {
                    let promoDone = "done";
                    allSum = allSum - (allSum * 0.3);
                    text.textContent = "Общая стоимость: " + allSum.toFixed(0) + " Р";
                    const pushSell = LocalStorageUtil_SELL.putSell(allSum);
                    const pushRemove = LocalStorageUtil_SELL.removeSell(allSum);
                    const push_promo = LocalStorageUtil_PROMO.putPromo(promoDone);
                }
                else {
                    alert("Вы уже ввели промокод");
                }
            }
        }

    }

    // Методы для удаления определеного элемента из корзины
    Set_remove_pc(element, id) {
        const { pushPC } = localStorageUtil_PC.putPC(id);
        var d = document.getElementById("all_content_basket");
        var d_nested = document.getElementById("basket_modal");
        var throwawayNode = d.removeChild(d_nested);
        location.reload();
    }
    Set_remove_phone(element, id) {
        const pushPhone = localStorageUtil_PHONE.putPhone(id);
        var d = document.getElementById("all_content_basket");
        var d_nested = document.getElementById("basket_modal2");
        var throwawayNode = d.removeChild(d_nested);
        location.reload();
    }
    Set_remove_tehnic(element, id) {
        const pushTehnic = localStorageUtil_TEHNIC.putTehnic(id);
        var d = document.getElementById("all_content_basket");
        var d_nested = document.getElementById("basket_modal3");
        var throwawayNode = d.removeChild(d_nested);
        location.reload();
    }
    Set_remove_instrum(element, id) {
        const pushInstruments = localStorageUtil_INSTRUMENTS.putInstruments(id);
        var d = document.getElementById("all_content_basket");
        var d_nested = document.getElementById("basket_modal4");
        var throwawayNode = d.removeChild(d_nested);
        location.reload();
    }



    render() {

        // Объявление всех переменных из локального хранилища
        const activeClass_basket = ' ';
        const productsStore = localStorage.getItem('productsPc');

        let html_catalog_basket = '';

        // Отрисовка элементов ,которые выбрал покупатель в корзину
        CATALOG.forEach(({ id, img, text, price }) => {
            if(productsStore !== null){
            if (productsStore.indexOf(id) !== -1) {
                html_catalog_basket += `
                <div class="basket_modal" id="basket_modal">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_pc(this,'${id}');">Удалить</button>
            </div>
            </div>
`;
            }
        }
        });
        CATALOG_PHONE.forEach(({ id, img, text, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                html_catalog_basket += `
                <div class="basket_modal" id="basket_modal2">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib_phone">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_phone(this,'${id}');">Удалить</button>
            </div>
            </div>
`;
            }
        });
        CATALOG_TEHNIC.forEach(({ id, img, text, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                html_catalog_basket += `
                <div class="basket_modal" id="basket_modal3">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_tehnic(this,'${id}');">Удалить</button>
            </div>
            </div>
`;
            }
        });
        CATALOG_INSTRUMENTS.forEach(({ id, img, text, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                html_catalog_basket += `
                <div class="basket_modal" id="basket_modal4">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_instrum(this,'${id}');">Удалить</button>
            </div>
            </div>
`;
            }
        });




        // Статическая отрисовка сайта
        const html = `
        <div class="all_content_basket" id="all_content_basket" style="display: flex">
        ${html_catalog_basket}
        </div>
        `;

        const div = document.createElement('div');

        div.classList.add('content_basket')

        const body = document.body;
        body.appendChild(div);


        const img_menu = `
<div class="img_menu">
<img src="../img/menu.svg">
        </div>`;
        const header = `
<div class="header">
<div class="header_ic">
    <img class="logo_img" src="../img/karmy.svg">
    <button class="bt_login">Login</button>
</div>
<div class="double_header">
    <div class="head_nav">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link_home" href="../html/index.html">Главная</a>
            </li>
            <li class="nav-item">
                <a class="nav-link_srav" href="#">Сравнить</a>
            </li>
            <li class="nav-item">
                <a class="nav-link_back" href="../html/basket_html.html">Корзина</a>
            </li>
            <li class="nav-item">
                <a class="nav-link_shop" href="#">Магазин</a>
            </li>
        </ul>
    </div>
</div>
        </div>`;
        const left_cen = `
            <div class="left_cen">
        <div class="comp_content_basket">
        <div class="adaptiv">
        <div class="all_content ">
        ${html}
         <div>
        <input placeholder="Введите промокод" class="input_promo" id="input_promo">
        <button class="bt_promo" onclick="basketStore_page.Promokod()">ОК</button>
        </div>
        <div class="sell_basket">
        <text class="text_sum" id="text_sum">Общая стоимость: Р</text>
        <button class="bt_buy">Купить</button>
            </div>
            </div>
        </div>
        </div>`;
        const footer = `<footer class="foot_er">

<ul class="nav_bot">
    <li class="nav-item_bot">
        <a class="nav-link_about" href="#">О нас</a>
    </li>
    <li class="nav-item_bot">
        <a class="nav-link_vac" href="#">Вакансии</a>
    </li>
    <li class="nav-item_bot">
        <a class="nav-link_back" href="#">Корзина</a>
    </li>
    <li class="nav-item_bot">
        <a class="nav-link_help" href="#">Помощь</a>
    </li>
</ul>
<div class="email_by_t">
    <input class="in_email" placeholder="Enter email.."></input>
    <button class="bt_email">Submit</button>
</div>
<div class="Copyright">Copyright Karmy</div>
        </footer>`;

        const content_html = `
        ${img_menu}
        ${header}
        ${left_cen}
        ${footer}
        `;

        div.innerHTML = content_html;
    }
}
// Отрисовка класса
const basketStore_page = new Basket_catalog();
basketStore_page.render();