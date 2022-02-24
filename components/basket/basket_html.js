
class Basket_catalog {

    // Если ввели промокод, и проверка на ранее введеный промо
    Promokod() {
        let input = document.getElementById("input_promo").value;
        let text = document.getElementById("text_sum");
        const getPromo = LocalStorageUtilSUM.getPromo();
        if (getPromo == 0) {
            if (input == "SELL") {
                const pushSum = LocalStorageUtilSUM.pushSum(input);
            }
        } else { alert("Вы уже ввели промокод"); }
        location.reload();
    }

    // Методы для удаления определеного элемента из корзины
    Set_remove_pc(i, id, price) {
        let name = 'pc';
        const removePc = JSON.parse(localStorage.getItem('countPc'));
        const productsStore = LocalStorageUtilPRODUCTS.getProductsPc();
        removePc.splice(i,1);
        productsStore.splice(i,1);
        localStorage.setItem('countPc',JSON.stringify(removePc));
        localStorage.setItem('productsPc',JSON.stringify(productsStore));
        location.reload();
    }
    Set_remove_phone(element, id, price) {
        let name = 'phone';
        const removePc = LocalStorageUtilPRODUCTS.putProducts(name, id, price, 0);
        location.reload();
    }
    Set_remove_tehnic(element, id, price) {
        let name = 'tehnic';
        const removePc = LocalStorageUtilPRODUCTS.putProducts(name, id, price, 0);
        location.reload();
    }
    Set_remove_instrum(element, id, price) {
        let name = 'instruments';
        const removePc = LocalStorageUtilPRODUCTS.putProducts(name, id, price, 0);
        location.reload();
    }

    LoadSum() {
        let getPc, getPhone, getTehnic, getInstr;
        const pcSum = LocalStorageUtilSUM.getSumPc(); if (pcSum !== 0) { getPc = pcSum.sum; } else getPc = 0;
        const phoneSum = LocalStorageUtilSUM.getSumPhone(); if (phoneSum !== 0) { getPhone = phoneSum.sum; } else getPhone = 0;
        const tehnicSum = LocalStorageUtilSUM.getSumTehnic(); if (tehnicSum !== 0) { getTehnic = tehnicSum.sum; } else getTehnic = 0;
        const InstrSum = LocalStorageUtilSUM.getSumInstr(); if (InstrSum !== 0) { getInstr = InstrSum.sum; } else getInstr = 0;
        let allSum = getPc + getPhone + getTehnic + getInstr;
        if (allSum < 0) {
            allSum = 0;
        }
        return allSum;
    }
    deleteCount(name, i, price) {
        const countPc = JSON.parse(localStorage.getItem('countPc'));
        const countPhone = JSON.parse(localStorage.getItem('countPhone'));
        const countTehnic = JSON.parse(localStorage.getItem('countTehnic'));
        const countInstr = JSON.parse(localStorage.getItem('countInstr'));
        const productsSum = LocalStorageUtilSUM.getSumPc();
        const productsSum2 = LocalStorageUtilSUM.getSumPhone();
        const productsSum3 = LocalStorageUtilSUM.getSumTehnic();
        const productsSum4 = LocalStorageUtilSUM.getSumInstr();
        if (name == 'pc') {
            if (countPc[i].count == 1) {
                alert("меньше нельзя!")
            } else
                countPc[i].count -= 1;
            productsSum.sum -= price;
            localStorage.setItem('sumPc', JSON.stringify(productsSum));
            localStorage.setItem('countPc', JSON.stringify(countPc));
        }
        if (name == 'phone') {
            countPhone[i].count -= 1;
            productsSum2.sum -= price;
            localStorage.setItem('sumPhone', JSON.stringify(productsSum2));
            localStorage.setItem('countPhone', JSON.stringify(countPhone));
        }
        if (name == 'tehnic') {
            countTehnic[i].count -= 1;
            productsSum3.sum -= price;
            localStorage.setItem('sumTehnic', JSON.stringify(productsSum3));
            localStorage.setItem('countTehnic', JSON.stringify(countTehnic));
        }
        if (name == 'instr') {
            countInstr[i].count -= 1;
            productsSum4.sum -= price;
            localStorage.setItem('sumInstr', JSON.stringify(productsSum4));
            localStorage.setItem('countInstr', JSON.stringify(countInstr));
        }
        location.reload();
    }
    plusCount(name, i, price) {
        const countPc = JSON.parse(localStorage.getItem('countPc'));
        const countPhone = JSON.parse(localStorage.getItem('countPhone'));
        const countTehnic = JSON.parse(localStorage.getItem('countTehnic'));
        const countInstr = JSON.parse(localStorage.getItem('countInstr'));
        const productsSum = LocalStorageUtilSUM.getSumPc();
        const productsSum2 = LocalStorageUtilSUM.getSumPhone();
        const productsSum3 = LocalStorageUtilSUM.getSumTehnic();
        const productsSum4 = LocalStorageUtilSUM.getSumInstr();
        if (name == 'pc') {
            countPc[i].count += 1;
            productsSum.sum += price;
            localStorage.setItem('sumPc', JSON.stringify(productsSum));
            localStorage.setItem('countPc', JSON.stringify(countPc));
        }
        if (name == 'phone') {
            countPhone[i].count += 1;
            productsSum2.sum += price;
            localStorage.setItem('sumPhone', JSON.stringify(productsSum2));
            localStorage.setItem('countPhone', JSON.stringify(countPhone));
        }
        if (name == 'tehnic') {
            countTehnic[i].count += 1;
            productsSum3.sum += price;
            localStorage.setItem('sumTehnic', JSON.stringify(productsSum3));
            localStorage.setItem('countTehnic', JSON.stringify(countTehnic));
        }
        if (name == 'instr') {
            countInstr[i].count += 1;
            productsSum4.sum += price;
            localStorage.setItem('sumInstr', JSON.stringify(productsSum4));
            localStorage.setItem('countInstr', JSON.stringify(countInstr));
        }

        location.reload();
    }


    render() {
        // Объявление всех переменных из локального хранилища
        const activeClass_basket = ' ';
        const productsStore = LocalStorageUtilPRODUCTS.getProductsPc();
        const productsStorePhone = LocalStorageUtilPRODUCTS.getProductsPhone();
        const productsStoreTehnic = LocalStorageUtilPRODUCTS.getProductsTehnic();
        const productsStoreInstr = LocalStorageUtilPRODUCTS.getProductsInstr();
        const countPc = JSON.parse(localStorage.getItem('countPc'));
        const countPhone = JSON.parse(localStorage.getItem('countPhone'));
        const countTehnic = JSON.parse(localStorage.getItem('countTehnic'));
        const countInstr = JSON.parse(localStorage.getItem('countInstr'));

        let k = 0;
        let html_catalog_basket = '';

        // Отрисовка элементов ,которые выбрал покупатель в корзину
        CATALOG.forEach(({ id, img, text, price }) => {
            let name = 'pc'
            if (productsStore !== null) {
                if (productsStore.indexOf(id) !== -1) {

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
            if (productsStorePhone !== null) {
                if (productsStorePhone.indexOf(id) !== -1) {
                    for (let i = 0; i < countPhone.length; i++) {
                        let count = countPhone[i].id.indexOf(id);
                        if (count == 0) {
                            k = i;
                        }
                    }
                    html_catalog_basket += `
                <div class="basket_modal" id="basket_modal2">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib_phone">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <div>
                    <button class="minusBt" onclick="basketStore_page.deleteCount('phone',${k},${price})">-</button>
                    <text id="pcCount">${countPhone[k].count}<text>
                    <button class="plusBt" onclick="basketStore_page.plusCount('phone',${k},${price})">+</button>
                    </div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_phone(this,'${id}','${price}');">Удалить</button>
            </div>
            </div>
`;
                }
            }
        });


        CATALOG_TEHNIC.forEach(({ id, img, text, price }) => {
            if (productsStoreTehnic !== null) {
                if (productsStoreTehnic.indexOf(id) !== -1) {
                    for (let i = 0; i < countTehnic.length; i++) {
                        let count = countTehnic[i].id.indexOf(id);
                        if (count == 0) {
                            k = i;
                        }
                    }
                    html_catalog_basket += `
                <div class="basket_modal" id="basket_modal3">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <div>
                    <button class="minusBt" onclick="basketStore_page.deleteCount('tehnic',${k},${price})">-</button>
                    <text id="pcCount">${countTehnic[k].count}<text>
                    <button class="plusBt" onclick="basketStore_page.plusCount('tehnic',${k},${price})">+</button>
                    </div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_tehnic(this,'${id}','${price}');">Удалить</button>
            </div>
            </div>
`;
                }
            }
        });


        CATALOG_INSTRUMENTS.forEach(({ id, img, text, price }) => {
            if (productsStoreInstr !== null) {
                if (productsStoreInstr.indexOf(id) !== -1) {
                    for (let i = 0; i < countInstr.length; i++) {
                        let count = countInstr[i].id.indexOf(id);
                        if (count == 0) {
                            k = i;
                        }
                    }
                    html_catalog_basket += `
                <div class="basket_modal" id="basket_modal4">
                <img class="basket_modal_img" src="${img}">
                <div class="basket_modal_text">${text}</div>
                <div class="basket_modal_pib">
                    <div class="basket_modal_price">${price.toLocaleString()} Р</div>
                    <div>
                    <button class="minusBt" onclick="basketStore_page.deleteCount('instr',${k},${price})">-</button>
                    <text id="pcCount">${countInstr[k].count}<text>
                    <button class="plusBt" onclick="basketStore_page.plusCount('instr',${k},${price})">+</button>
                    </div>
                    <button class="basket_modal_button ${activeClass_basket}" onclick="basketStore_page.Set_remove_instrum(this,'${id}','${price}');">Удалить</button>
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
                  </div>
                 <div class="sell_basket">
                    <text class="text_sum" id="text_sum">Общая стоимость: ${allSum}  Р</text>
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
    }
}
// Отрисовка класса
const basketStore_page = new Basket_catalog();
basketStore_page.render();