class Basket_head {


    render(count) {
        const html = ` 

            <div class="img_basket" onclick='location.href="../html/basket_html.html"'>
            <img src="../img/basket.png"  >
            <text placeholder=''>${count}</text>
</div>
            `;

        const html_header = `
            <div class="header_basket">
            ${html}
            </div>
            `;

        ROOT_BASKET.innerHTML = html_header;
    }
}
const pcStore = localStorageUtil_PC.getPC();
const tehnicStore = localStorageUtil_TEHNIC.getTehnic();
const phoneStore = localStorageUtil_PHONE.getPhone();
const instrumentsStore = localStorageUtil_INSTRUMENTS.getInstruments();

const header_basket = new Basket_head();
const cou = pcStore.length + tehnicStore.length + phoneStore.length + instrumentsStore.length;
header_basket.render(cou);