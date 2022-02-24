
class Basket_catalog {

    // Если ввели промокод, и проверка на ранее введеный промо
    Promokod() {
        let input = document.getElementById("input_promo").value;
        let text = document.getElementById("text_sum");
        const getPromo = LocalStorageUtilSUM.getPromo();
        if (getPromo == 0) {
            if (input == "SELL") {
                const pushSum = LocalStorageUtilSUM.pushSum(input);
                let removePromo = document.getElementById('removePromo').style.display = 'block';

            }
        } else { alert("Вы уже ввели промокод"); }
        this.LoadSum();
        location.reload();
    }

    // Методы для удаления определеного элемента из корзины
    Set_remove_pc(i, id, price) {

        const productsStore = LocalStorageUtilPRODUCTS.getProductsPc();
        productsStore.splice(i, 1);
        localStorage.setItem('productsPc', JSON.stringify(productsStore));
        this.LoadSum();
        location.reload();
    }
    Set_remove_phone(i, id, price) {
        const productsStore = LocalStorageUtilPRODUCTS.getProductsPhone();
        productsStore.splice(i, 1);
        localStorage.setItem('productsPhone', JSON.stringify(productsStore));
        this.LoadSum();
        location.reload();
    }
    Set_remove_tehnic(i, id, price) {
        const productsStore = LocalStorageUtilPRODUCTS.getProductsTehnic();
        productsStore.splice(i, 1);
        localStorage.setItem('productsTehnic', JSON.stringify(productsStore));
        this.LoadSum();
        location.reload();
    }
    Set_remove_instrum(i, id, price) {
        const productsStore = LocalStorageUtilPRODUCTS.getProductsInstr();
        productsStore.splice(i, 1);
        localStorage.setItem('productsInstr', JSON.stringify(productsStore));
        this.LoadSum();
        location.reload();
    }

    LoadSum() {
        let getPc, getPhone, getTehnic, getInstr;
        let pricePc = 0, pricePhone = 0, priceTehnic = 0, priceInstr = 0;
        const countPc = LocalStorageUtilPRODUCTS.getProductsPc();
        const countPhone = LocalStorageUtilPRODUCTS.getProductsPhone();
        const countTehnic = LocalStorageUtilPRODUCTS.getProductsTehnic();
        const countInstr = LocalStorageUtilPRODUCTS.getProductsInstr();
        const promo = LocalStorageUtilSUM.getPromo();
        for (let i = 0; i < countPc.length; i++) {
            if (countPc.length > 0) {
                if (promo == "SELL") {
                    pricePc += countPc[i].price * countPc[i].count;
                    pricePc -= pricePc * 0.3;
                }else{
                pricePc += countPc[i].price * countPc[i].count;
                }
            }
        }
        localStorage.setItem('sumPc', JSON.stringify(pricePc));
        for (let i = 0; i < countPhone.length; i++) {
            if (countPhone.length > 0) {
                if (promo == "SELL") {
                    pricePhone += countPhone[i].price * countPhone[i].count;
                    pricePhone -= pricePhone * 0.2;
                }else{
                pricePhone += countPhone[i].price * countPhone[i].count;
                }
            }
        }
        localStorage.setItem('sumPhone', JSON.stringify(pricePhone));
        for (let i = 0; i < countTehnic.length; i++) {
            if (countTehnic.length > 0) {
                if (promo == "SELL") {
                    priceTehnic += countTehnic[i].price * countTehnic[i].count;
                    priceTehnic -= priceTehnic * 0.2;
                }else{
                priceTehnic += countTehnic[i].price * countTehnic[i].count;
                }
            }
        }
        localStorage.setItem('sumTehnic', JSON.stringify(priceTehnic));
        for (let i = 0; i < countInstr.length; i++) {
            if (countInstr.length > 0) {
                if (promo == "SELL") {
                    priceInstr += countInstr[i].price * countInstr[i].count;
                    priceInstr -= priceInstr * 0.2;
                }else{
                priceInstr += countInstr[i].price * countInstr[i].count;
                }
            }
        }
        localStorage.setItem('sumInstr', JSON.stringify(priceInstr));
        const pcSum = LocalStorageUtilSUM.getSumPc(); if (pcSum !== 0) { getPc = pcSum; } else getPc = 0;
        const phoneSum = LocalStorageUtilSUM.getSumPhone(); if (phoneSum !== 0) { getPhone = phoneSum; } else getPhone = 0;
        const tehnicSum = LocalStorageUtilSUM.getSumTehnic(); if (tehnicSum !== 0) { getTehnic = tehnicSum; } else getTehnic = 0;
        const InstrSum = LocalStorageUtilSUM.getSumInstr(); if (InstrSum !== 0) { getInstr = InstrSum; } else getInstr = 0;
        let allSum = getPc + getPhone + getTehnic + getInstr;
        if (allSum < 0) {
            allSum = 0;
        }
        return allSum;
    }

    deleteCount(name, i, price) {
        let countPc = LocalStorageUtilPRODUCTS.getProductsPc();
        let countPhone = LocalStorageUtilPRODUCTS.getProductsPhone();
        let countTehnic = LocalStorageUtilPRODUCTS.getProductsTehnic();
        let countInstr = LocalStorageUtilPRODUCTS.getProductsInstr();
        let productsSum = LocalStorageUtilSUM.getSumPc();
        let productsSum2 = LocalStorageUtilSUM.getSumPhone();
        let productsSum3 = LocalStorageUtilSUM.getSumTehnic();
        let productsSum4 = LocalStorageUtilSUM.getSumInstr();
        if (name == 'pc') {
            if (countPc[i].count == 1) {
                alert("меньше нельзя!")
            } else
                countPc[i].count -= 1;
            productsSum -= price;
            localStorage.setItem('sumPc', JSON.stringify(productsSum));
            localStorage.setItem('productsPc', JSON.stringify(countPc));
        }
        if (name == 'phone') {
            countPhone[i].count -= 1;
            productsSum2 -= price;
            localStorage.setItem('sumPhone', JSON.stringify(productsSum2));
            localStorage.setItem('productsPhone', JSON.stringify(countPhone));
        }
        if (name == 'tehnic') {
            countTehnic[i].count -= 1;
            productsSum3 -= price;
            localStorage.setItem('sumTehnic', JSON.stringify(productsSum3));
            localStorage.setItem('productsTehnic', JSON.stringify(countTehnic));
        }
        if (name == 'instr') {
            countInstr[i].count -= 1;
            productsSum4 -= price;
            localStorage.setItem('sumInstr', JSON.stringify(productsSum4));
            localStorage.setItem('productsInstr', JSON.stringify(countInstr));
        }
        location.reload();
    }

    plusCount(name, i, price) {
        let countPc = LocalStorageUtilPRODUCTS.getProductsPc();
        let countPhone = LocalStorageUtilPRODUCTS.getProductsPhone();
        let countTehnic = LocalStorageUtilPRODUCTS.getProductsTehnic();
        let countInstr = LocalStorageUtilPRODUCTS.getProductsInstr();
        let productsSum = LocalStorageUtilSUM.getSumPc();
        let productsSum2 = LocalStorageUtilSUM.getSumPhone();
        let productsSum3 = LocalStorageUtilSUM.getSumTehnic();
        let productsSum4 = LocalStorageUtilSUM.getSumInstr();
        if (name == 'pc') {
            countPc[i].count += 1;
            productsSum += price;
            localStorage.setItem('sumPc', JSON.stringify(productsSum));
            localStorage.setItem('productsPc', JSON.stringify(countPc));
        }
        if (name == 'phone') {
            countPhone[i].count += 1;
            productsSum2 += price;
            localStorage.setItem('sumPhone', JSON.stringify(productsSum2));
            localStorage.setItem('productsPhone', JSON.stringify(countPhone));
        }
        if (name == 'tehnic') {
            countTehnic[i].count += 1;
            productsSum3 += price;
            localStorage.setItem('sumTehnic', JSON.stringify(productsSum3));
            localStorage.setItem('productsTehnic', JSON.stringify(countTehnic));
        }
        if (name == 'instr') {
            countInstr[i].count += 1;
            productsSum4 += price;
            localStorage.setItem('sumInstr', JSON.stringify(productsSum4));
            localStorage.setItem('productsInstr', JSON.stringify(countInstr));
        }

        location.reload();
    }
    RemovePromo(){
        localStorage.removeItem('promo');
        location.reload();
    }

    render() {
        // Объявление всех переменных из локального хранилища
        const activeClass_basket = ' ';

        const countPc = LocalStorageUtilPRODUCTS.getProductsPc();
        const countPhone = LocalStorageUtilPRODUCTS.getProductsPhone();
        const countTehnic = LocalStorageUtilPRODUCTS.getProductsTehnic();
        const countInstr = LocalStorageUtilPRODUCTS.getProductsInstr();

        let k = 0,a=0,b=0,c=0;
        let html_catalog_basket = '';

        // Отрисовка элементов ,которые выбрал покупатель в корзину
        CATALOG.forEach(({ id, img, text, price }) => {
            for (let i = 0; i < countPc.length; i++) {
                let count = countPc[i].id.indexOf(id);
                if (count == 0) {
                    k = i;
                }
            }
            if (countPc.length > 0) {
                if (countPc[k].id.indexOf(id) !== -1) {
                    html_catalog_basket += `
                <div class="basket_modal" id="basket_modal">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <div>
                    <button class="minusBt" onclick="basketStore_page.deleteCount('pc',${k},${price})">-</button>
                    <text id="pcCount">${countPc[k].count}<text>
                    <button class="plusBt" onclick="basketStore_page.plusCount('pc',${k},${price})">+</button>
                    </div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_pc(${k},'${id}','${price}');">Удалить</button>
            </div>
            </div>
`;
                }
            }
        });


        CATALOG_PHONE.forEach(({ id, img, text, price }) => {
            for (let i = 0; i < countPhone.length; i++) {
                let count = countPhone[i].id.indexOf(id);
                if (count == 0) {
                    a = i;
                }
            }
            if (countPhone.length > 0) {
                if (countPhone[a].id.indexOf(id) !== -1) {

                    html_catalog_basket += `
                <div class="basket_modal" id="basket_modal2">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib_phone">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <div>
                    <button class="minusBt" onclick="basketStore_page.deleteCount('phone',${a},${price})">-</button>
                    <text id="pcCount">${countPhone[a].count}<text>
                    <button class="plusBt" onclick="basketStore_page.plusCount('phone',${a},${price})">+</button>
                    </div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_phone(${a},'${id}','${price}');">Удалить</button>
            </div>
            </div>
`;
                }
            }
        });


        CATALOG_TEHNIC.forEach(({ id, img, text, price }) => {
            for (let i = 0; i < countTehnic.length; i++) {
                let count = countTehnic[i].id.indexOf(id);
                if (count == 0) {
                    b = i;
                }
            }
            if (countTehnic.length > 0) {
                if (countTehnic[b].id.indexOf(id) !== -1) {

                    html_catalog_basket += `
                <div class="basket_modal" id="basket_modal3">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <div>
                    <button class="minusBt" onclick="basketStore_page.deleteCount('tehnic',${b},${price})">-</button>
                    <text id="pcCount">${countTehnic[b].count}<text>
                    <button class="plusBt" onclick="basketStore_page.plusCount('tehnic',${b},${price})">+</button>
                    </div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_tehnic(${b},'${id}','${price}');">Удалить</button>
            </div>
            </div>
`;
                }
            }
        });


        CATALOG_INSTRUMENTS.forEach(({ id, img, text, price }) => {
            for (let i = 0; i < countInstr.length; i++) {
                let count = countInstr[i].id.indexOf(id);
                if (count == 0) {
                    c = i;
                }
            }
            if (countInstr.length > 0) {
                if (countInstr[c].id.indexOf(id) !== -1) {

                    html_catalog_basket += `
                <div class="basket_modal" id="basket_modal4">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <div>
                    <button class="minusBt" onclick="basketStore_page.deleteCount('instr',${c},${price})">-</button>
                    <text id="pcCount">${countInstr[c].count}<text>
                    <button class="plusBt" onclick="basketStore_page.plusCount('instr',${c},${price})">+</button>
                    </div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_instrum(${c},'${id}','${price}');">Удалить</button>
            </div>
            </div>
`;
                }
            }
        });

        const allSum = this.LoadSum();
        // Статическая отрисовка сайта
        const html = `
            <div class="all_content_basket" id="all_content_basket" style="display: flex">
                 ${html_catalog_basket}
                    </div>`;

        const div = document.createElement('div');
        div.classList.add('content_basket')
        const body = document.body;
        body.appendChild(div);

        const contentHtml = () => {
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
            <div class="comp_content_basket" id="comp_content_basket">
              <div class="adaptiv">
                  <div class="all_content" id="all_content">
                      ${html}
                  <div>
                    <input placeholder="Введите промокод" class="input_promo" id="input_promo">
                    <button class="bt_promo" onclick="basketStore_page.Promokod()">ОК</button>
                    <button class="removePromo" id="removePromo" style="display: none" onclick="basketStore_page.RemovePromo()">Удалить промокод</button>
                  </div>
                 <div class="sell_basket">
                    <text class="text_sum" id="text_sum">Общая стоимость: ${allSum.toFixed(0)}  Р</text>

                    <button class="bt_buy">Купить</button>
                 </div>
               </div>
            </div>
        </div>`;
            const footer = `
    <footer class="foot_er">
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
            const basket_null = `
    <div id="basket_text" class="basket_text" style="display:none;margin:auto;"><text ">Ваша корзина пуста</text></div>
    `;
            const content_html = `
    ${img_menu}
    ${header}
    ${left_cen}
    ${basket_null}
    ${footer}
    `;
            return content_html;
        }

        div.innerHTML = contentHtml();
        if (allSum == 0) {
            document.getElementById('all_content').style.display = "none";
            document.getElementById('comp_content_basket').style.display = "none";
            document.getElementById('basket_text').style.display = "block";
        }
        const promo = LocalStorageUtilSUM.getPromo();
        if(promo == "SELL"){
             document.getElementById('removePromo').style.display = 'inline';
        }
    }
}
// Отрисовка класса
const basketStore_page = new Basket_catalog();
basketStore_page.render();