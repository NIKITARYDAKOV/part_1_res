
class LocalStorageUtil_products {
    constructor() {
        this.NamePc = 'productsPc';
        this.NamePhone = 'productsPhone';
        this.NameTehnic = 'productsTehnic';
        this.NameInstruments = 'productsInstr';
    }
    getProductsPc() {
        const pcLocalStorage = localStorage.getItem(this.NamePc);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return [];
    }
    getProductsPhone() {
        const pcLocalStorage = localStorage.getItem(this.NamePhone);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return [];
    }
    getProductsTehnic() {
        const pcLocalStorage = localStorage.getItem(this.NameTehnic);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return [];
    }
    getProductsInstr() {
        const pcLocalStorage = localStorage.getItem(this.NameInstruments);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return [];
    }


    putProducts(name, id, price, count) {

        let pushStore = false;
        let pushStorePhone = false;
        let pushStoreTehnic = false;
        let pushStoreInstr = false;

        let sum = '';
        if (name == 'pc') {
            let products = this.getProductsPc();
            const index = products.indexOf(id);


            if (index == -1) {
                pushStore = true;

                sum = JSON.parse(localStorage.getItem('sumPc') || '0');
                if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                sum += Number(price);
                sum = sum * count;
                const sumPc = {
                    sum: sum
                }
                products.push(id);
                localStorage.setItem('sumPc', JSON.stringify(sumPc));
            }
            localStorage.setItem(this.NamePc, JSON.stringify(products));
            return { pushStore }
        }
        if (name == 'phone') {
            let productsPhone = this.getProductsPhone();
            const index = productsPhone.indexOf(id);

            if (index == -1) {
                pushStorePhone = true;
                sum = JSON.parse(localStorage.getItem('sumPhone') || '0');
                if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                sum += Number(price);
                sum = sum * count;
                const sumPc = {
                    sum: sum
                }
                productsPhone.push(id);
                localStorage.setItem('sumPhone', JSON.stringify(sumPc));
            }
            localStorage.setItem(this.NamePhone, JSON.stringify(productsPhone));
            return { pushStorePhone }
        }
        if (name == 'tehnic') {
            let productsTehnic = this.getProductsTehnic();
            const index = productsTehnic.indexOf(id);

            if (index == -1) {
                pushStoreTehnic = true;
                sum = JSON.parse(localStorage.getItem('sumTehnic') || '0');
                if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                sum += Number(price);
                sum = sum * count;
                const sumPc = {
                    sum: sum
                }
                productsTehnic.push(id);
                localStorage.setItem('sumTehnic', JSON.stringify(sumPc));
            }
            localStorage.setItem(this.NameTehnic, JSON.stringify(productsTehnic));
            return { pushStoreTehnic }
        }
        if (name == 'instruments') {
            let productsInstr = this.getProductsInstr();
            const index = productsInstr.indexOf(id);

            if (index == -1) {
                pushStoreInstr = true;
                sum = JSON.parse(localStorage.getItem('sumInstr') || '0');
                if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                sum += Number(price);
                sum = sum * count;
                const sumPc = {
                    sum: sum
                }
                productsInstr.push(id);
                localStorage.setItem('sumInstr', JSON.stringify(sumPc));
            }
            localStorage.setItem(this.NameInstruments, JSON.stringify(productsInstr));
            return { pushStoreInstr }
        }
    }
}

const LocalStorageUtilPRODUCTS = new LocalStorageUtil_products();