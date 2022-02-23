
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
                const Pushid = {
                    name: name,
                    id: id,
                    price: price,
                    count: count
                }
                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumPc') || '0');
                    if (sum != 0) { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumPc = { sum: sum }
                    localStorage.setItem('sumPc', JSON.stringify(sumPc));
                }

                products.push(Pushid);
                countSum();

            } else {
                const removeSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumPc') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum = sum - price;
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

                const Pushid = {
                    name: name,
                    id: id,
                    price: price,
                    count: count
                }

                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumPhone') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumPhone = { sum: sum }
                    localStorage.setItem('sumPhone', JSON.stringify(sumPhone));
                }

                productsPhone.push(Pushid);
                countSum();
            } else {
                const removeSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumPhone') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum = sum - price;
                    const sumPc = { sum: sum }
                    localStorage.setItem('sumPhone', JSON.stringify(sumPc));
                }
                productsPhone.splice(index, 1);
                removeSum();
            }
            localStorage.setItem(this.NamePhone, JSON.stringify(productsPhone));
            return { pushStorePhone }
        }


        if (name == 'tehnic') {
            let productsTehnic = this.getProductsTehnic();
            const index = productsTehnic.indexOf(id);

            if (index == -1) {
                pushStoreTehnic = true;

                const Pushid = {
                    name: name,
                    id: id,
                    price: price,
                    count: count
                }

                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumTehnic') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumTehnic = { sum: sum }
                    localStorage.setItem('sumTehnic', JSON.stringify(sumTehnic));
                }

                productsTehnic.push(Pushid);
                countSum();

            } else {
                const removeSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumTehnic') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum = sum - price;
                    const sumPc = { sum: sum }
                    localStorage.setItem('sumTehnic', JSON.stringify(sumPc));
                }
                productsTehnic.splice(index, 1);
                removeSum();
            }
            localStorage.setItem(this.NameTehnic, JSON.stringify(productsTehnic));
            return { pushStoreTehnic }
        }


        if (name == 'instruments') {
            let productsInstr = this.getProductsInstr();
            const index = productsInstr.indexOf(id);

            if (index == -1) {
                pushStoreInstr = true;

                const Pushid = {
                    name: name,
                    id: id,
                    price: price,
                    count: count
                }

                const countSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumInstr') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum += price * count;
                    const sumInstr = { sum: sum }
                    localStorage.setItem('sumInstr', JSON.stringify(sumInstr));
                }

                productsInstr.push(Pushid);
                countSum();
            } else {
                const removeSum = () => {
                    sum = JSON.parse(localStorage.getItem('sumInstr') || '0');
                    if (sum == 0) { sum = 0; } else { sum = Number(sum.sum); }
                    sum = sum - price;
                    const sumPc = { sum: sum }
                    localStorage.setItem('sumInstr', JSON.stringify(sumPc));
                }
                productsInstr.splice(index, 1);
                removeSum();
            }
            localStorage.setItem(this.NameInstruments, JSON.stringify(productsInstr));
            return { pushStoreInstr }
        }
    }
}
class LocalStorageUtil_sumCount {
    constructor() {
        this.pcSum = 'sumPc';
        this.phoneSum = 'sumPhone';
        this.tehnicSum = 'sumTehnic';
        this.instrSum = 'sumInstr';
    }
    getSumPc() {
        const pcLocalStorage = localStorage.getItem(this.pcSum);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return 0;
    }

    getSumPhone() {
        const pcLocalStorage = localStorage.getItem(this.phoneSum);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return 0;
    }

    getSumTehnic() {
        const pcLocalStorage = localStorage.getItem(this.tehnicSum);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return 0;
    }

    getSumInstr() {
        const pcLocalStorage = localStorage.getItem(this.instrSum);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return 0;
    }

    getPromo() {
        const pcLocalStorage = localStorage.getItem('promo');
        if (pcLocalStorage !== null) {
            return pcLocalStorage;
        }
        else
            return 0;
    }

    pushSum(name) {
        let sumPc = this.getSumPc();
        let sumPhone = this.getSumPhone();
        let sumTehnic = this.getSumTehnic();
        let sumInstr = this.getSumInstr();
        if (sumPc != 0) { sumPc = Number(sumPc.sum); sumPc -= (sumPc * 0.3); }
        if (sumPhone != 0) { sumPhone = Number(sumPhone.sum); sumPhone -= sumPhone * 0, 2; }
        if (sumTehnic != 0) { sumTehnic = Number(sumTehnic.sum); sumTehnic -= sumTehnic * 0, 1; }
        if (sumInstr != 0) { sumInstr = Number(sumInstr.sum); sumInstr -= sumInstr * 0, 25; }

        const sumPc2 = { sum: sumPc }
        localStorage.setItem('sumPc', JSON.stringify(sumPc2));

        const sumPhone2 = { sum: sumPhone }
        localStorage.setItem('sumPhone', JSON.stringify(sumPhone2));

        const sumTehnic2 = { sum: sumTehnic }
        localStorage.setItem('sumTehnic', JSON.stringify(sumTehnic2));

        const sumInstr2 = { sum: sumInstr }
        localStorage.setItem('sumInstr', JSON.stringify(sumInstr2));

        const pushPromo = localStorage.setItem('promo', name);
    }
    ReloadSum(price) {
        let sum;
        const countSum = () => {
            sum = JSON.parse(localStorage.getItem('sumPc') || '0');
            if (sum != 0) { sum = Number(sum.sum); }
            sum += price * count;
            const sumPc = { sum: sum }
            localStorage.setItem('sumPc', JSON.stringify(sumPc));
        }
    }
}

const LocalStorageUtilPRODUCTS = new LocalStorageUtil_products();
const LocalStorageUtilSUM = new LocalStorageUtil_sumCount();