class Basket_head {
    LoadPc(){
        let countPc = 0;
        let countPhone = 0;
        let countTehnic = 0;
        let countInstr = 0;
        let name = 'pc';
        const productsStoreCount = JSON.parse(localStorage.getItem('productsPc'));
        const productsStoreCountPhone = JSON.parse(localStorage.getItem('productsPhone'));
        const productsStoreCountTehnic = JSON.parse(localStorage.getItem('productsTehnic'));
        const productsStoreCountInstr = JSON.parse(localStorage.getItem('productsInstr'));
        if(productsStoreCount!==null){
        while (productsStoreCount.length > countPc) {
            if (productsStoreCount.indexOf(name) == -1) {
                countPc++;
            }
        }
    }
    if(productsStoreCountPhone!==null){
        while (productsStoreCountPhone.length > countPc) {
            if (productsStoreCountPhone.indexOf(name) == -1) {
                countPhone++;
            }
        }
    }
    if(productsStoreCountTehnic!==null){
        while (productsStoreCountTehnic.length > countPc) {
            if (productsStoreCountTehnic.indexOf(name) == -1) {
                countTehnic++;
            }
        }
    }
    if(productsStoreCountInstr!==null){
        while (productsStoreCountInstr.length > countPc) {
            if (productsStoreCountInstr.indexOf(name) == -1) {
                countInstr++;
            }
        }
    }
return countPc+countPhone+countTehnic+countInstr;
    }

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



const header_basket = new Basket_head();
const cou = header_basket.LoadPc();
header_basket.render(cou);