
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

        let sum = 0;
        if (name == 'pc') {
            let products = this.getProductsPc();
            const index = products.indexOf(id);

            if (index == -1) {
                pushStore = true;

                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumPc') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumPc = { sum: sum }
                    localStorage.setItem('sumPc', JSON.stringify(sumPc));
                }

                products.push(id);
                countSum();
                
            }else{
                const removeSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumPc') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum = sum -price;
                    const sumPc = { sum: sum }
                    localStorage.setItem('sumPc', JSON.stringify(sumPc));
                }
                products.splice(index, 1);
                removeSum();
            }
            localStorage.setItem(this.NamePc, JSON.stringify(products));
            return { pushStore }
        }


        if (name == 'phone') {
            let productsPhone = this.getProductsPhone();
            const index = productsPhone.indexOf(id);

            if (index == -1) {
                pushStorePhone = true;


                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumPhone') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumPhone = { sum: sum }
                    return sumPhone;
                }

                productsPhone.push(id);
                localStorage.setItem('sumPhone', JSON.stringify(countSum()));
            }
            localStorage.setItem(this.NamePhone, JSON.stringify(productsPhone));
            return { pushStorePhone }
        }


        if (name == 'tehnic') {
            let productsTehnic = this.getProductsTehnic();
            const index = productsTehnic.indexOf(id);

            if (index == -1) {
                pushStoreTehnic = true;

                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumTehnic') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumTehnic = { sum: sum }
                    return sumTehnic;
                }

                productsTehnic.push(id);
                localStorage.setItem('sumTehnic', JSON.stringify(countSum()));
            }
            localStorage.setItem(this.NameTehnic, JSON.stringify(productsTehnic));
            return { pushStoreTehnic }
        }


        if (name == 'instruments') {
            let productsInstr = this.getProductsInstr();
            const index = productsInstr.indexOf(id);

            if (index == -1) {
                pushStoreInstr = true;

                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumInstr') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumInstr = { sum: sum }
                    return sumInstr;
                }

                productsInstr.push(id);
                localStorage.setItem('sumInstr', JSON.stringify(countSum()));
            }
            localStorage.setItem(this.NameInstruments, JSON.stringify(productsInstr));
            return { pushStoreInstr }
        }
    }
}

const LocalStorageUtilPRODUCTS = new LocalStorageUtil_products();