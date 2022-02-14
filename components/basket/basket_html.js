var sumPc = 0;
var sumPhone = 0;
var sumTehnic = 0;
var sumInstruments = 0;
var allSum = 0;
var sum_check = false;

class Basket_catalog {

    Promokod() {
        let input = document.getElementById("input_promo").value;
        let text = document.getElementById("text_sum");
        if (input == "SELL") {
            sum_check = true;
            allSum = sumPc + sumInstruments + sumPhone + sumTehnic;
            allSum = allSum-( allSum * 0.3);
            text.textContent = "Общая стоимость: "+allSum +" Р";
        }

    }
    
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
        const activeClass_basket = ' ';
        const pcStore = localStorageUtil_PC.getPC();
        const phoneStore = localStorageUtil_PHONE.getPhone();
        const tehnicStore = localStorageUtil_TEHNIC.getTehnic();
        const instrumentsStore = localStorageUtil_INSTRUMENTS.getInstruments();
        let html_catalog_basket = '';


        CATALOG.forEach(({ id, img, text, price }) => {
            if (pcStore.indexOf(id) !== -1) {
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
                sumPc += price;
            }
        });

        CATALOG_PHONE.forEach(({ id, img, text, price }) => {
            if (phoneStore.indexOf(id) !== -1) {
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
                sumPhone += price
            }
        });
        CATALOG_TEHNIC.forEach(({ id, img, text, price }) => {
            if (tehnicStore.indexOf(id) !== -1) {
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
                sumTehnic += price;
            }
        });
        CATALOG_INSTRUMENTS.forEach(({ id, img, text, price }) => {
            if (instrumentsStore.indexOf(id) !== -1) {
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
                sumInstruments += price;
            }
        });

        const html = `
        <div class="all_content_basket" id="all_content_basket" style="display: flex">
        ${html_catalog_basket}
        </div>
        `;

        const div = document.createElement('div');

        div.classList.add('content_basket')

        const body = document.body;
        body.appendChild(div);

if(sum_check==true){
    allSum = sumPc + sumInstruments + sumPhone + sumTehnic;
    allSum = allSum - (allSum * 0.3);
}
else{
    allSum = sumPc + sumInstruments + sumPhone + sumTehnic;
}
        
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
        <text class="text_sum" id="text_sum">Общая стоимость: ${allSum.toLocaleString()} Р</text>
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

const basketStore_page = new Basket_catalog();
basketStore_page.render();