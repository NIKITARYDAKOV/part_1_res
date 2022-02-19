class Basket_head {


    LoadPc () {
        const productPc = LocalStorageUtilPRODUCTS.getProductsPc();
        const productPhone = LocalStorageUtilPRODUCTS.getProductsPhone();
        const productTehnic = LocalStorageUtilPRODUCTS.getProductsTehnic();
        const productInstr = LocalStorageUtilPRODUCTS.getProductsInstr();
        return productPc.length + productPhone.length + productTehnic.length + productInstr.length;
    }

    render (count) {
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



const header_basket = new Basket_head();
const cou = header_basket.LoadPc();
header_basket.render(cou);