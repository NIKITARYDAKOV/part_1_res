class LocalStorageUtil_pc {
    constructor() {
        this.keyName = 'pc';
    }
    getPC() {
        const pcLocalStorage = localStorage.getItem(this.keyName);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return [];
    }
    putPC(id) {
        let pc = this.getPC();
        let pushPC = false;
        const index = pc.indexOf(id);
        if (index == -1) {
            pc.push(id);
            pushPC = true;
        }
        else {
            pc.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(pc));

        return { pushPC, pc }
    }
}


class LocalStorageUtil_products {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const pcLocalStorage = localStorage.getItem(this.keyName);
        if (pcLocalStorage !== null) {
            return JSON.parse(pcLocalStorage);
        }
        else
            return [];
    }


    putProducts(name, id, price) {
        let products = this.getProducts();
        let productsCheck = localStorage.getItem('products') || [];
        const index = productsCheck.indexOf(id);
        let pushStore = false;
        let sum = '';
        let count = 1;
        if(name=='pc'){
        const pushProducts = {
            id: id,
            name: name,
            price: price,
        }
        if (index == -1) {
            pushStore = true;

            sum = localStorage.getItem('sum') || '0';
            if(sum == 0){sum = 0;}else{sum = Number(sum);}
            sum += Number(price);

            products.push(pushProducts);
            localStorage.setItem('sum', sum);
        }
        else{
            products.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(products));
        return{pushStore}
    }
    }
}



class LocalStorageUtil_phone {
    constructor() {
        this.keyName = 'phone';
    }
    getPhone() {
        const phoneLocalStorage = localStorage.getItem(this.keyName);
        if (phoneLocalStorage !== null) {
            return JSON.parse(phoneLocalStorage);
        }
        else
            return [];
    }
    putPhone(id) {
        let phone = this.getPhone();
        let push_phone = false;
        const index = phone.indexOf(id);
        if (index == -1) {
            phone.push(id);
            push_phone = true;
        }
        else {
            phone.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(phone));

        return { push_phone, phone }
    }
}



class LocalStorageUtil_tehnic {

    constructor() {
        this.keyName = 'tehnic';
    }
    getTehnic() {
        const tehnicLocalStorage = localStorage.getItem(this.keyName);
        if (tehnicLocalStorage !== null) {
            return JSON.parse(tehnicLocalStorage);
        }
        else
            return [];
    }
    putTehnic(id) {
        let tehnic = this.getTehnic();
        let push_tehnic = false;
        const index = tehnic.indexOf(id);
        if (index == -1) {
            tehnic.push(id);
            push_tehnic = true;
        }
        else {
            tehnic.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(tehnic));

        return { push_tehnic, tehnic }
    }
}



class LocalStorageUtil_instruments {
    constructor() {
        this.keyName = 'instruments';
    }
    getInstruments() {
        const instrumentsLocalStorage = localStorage.getItem(this.keyName);
        if (instrumentsLocalStorage !== null) {
            return JSON.parse(instrumentsLocalStorage);
        }
        else
            return [];
    }
    putInstruments(id) {
        let instruments = this.getInstruments();
        let push_instruments = false;
        const index = instruments.indexOf(id);
        if (index == -1) {
            instruments.push(id);
            push_instruments = true;
        }
        else {
            instruments.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(instruments));

        return { push_instruments, instruments }
    }
}
class LocalStorageUtil_sell {
    constructor() {
        this.keyName = 'sell';
    }
    getSell() {
        const sellLocalStorage = localStorage.getItem(this.keyName);
        if (sellLocalStorage !== null) {
            return JSON.parse(sellLocalStorage);
        }
        else
            return [];
    }
    putSell(id) {
        let sell = this.getSell();
        let pushSell = false;
        const index = sell.indexOf(id);
        if (index == -1) {
            sell.push(id);
            pushSell = true;
        }
        else {
            if (index >= 1) {
                sell.length = 0;
                sell.push(id);
            }
        }


        localStorage.setItem(this.keyName, JSON.stringify(sell));

        return { pushSell, sell }
    }
    removeSell(id) {
        let sell = this.getSell();
        const index = sell.indexOf(id);
        if (index >= 1) {
            sell.length = 0;
            sell.push(id);
        }
    }
}
class LocalStorageUtil_promo {
    constructor() {
        this.keyName = 'promo';
    }
    getPromo() {
        const sellLocalStorage = localStorage.getItem(this.keyName);
        if (sellLocalStorage !== null) {
            return JSON.parse(sellLocalStorage);
        }
        else
            return [];
    }
    putPromo(id) {
        let promo = this.getPromo();
        let pushPromo = false;
        const index = promo.indexOf(id);
        if (index == -1) {
            promo.push(id);
            pushPromo = true;
        }
        else {
            if (index >= 1) {
                promo.length = 0;
                promo.push(id);
            }
        }


        localStorage.setItem(this.keyName, JSON.stringify(promo));

        return { pushPromo, promo }
    }
}


const localStorageUtil_PC = new LocalStorageUtil_pc();
const localStorageUtil_PHONE = new LocalStorageUtil_phone();
const localStorageUtil_TEHNIC = new LocalStorageUtil_tehnic();
const localStorageUtil_INSTRUMENTS = new LocalStorageUtil_instruments();
const LocalStorageUtil_SELL = new LocalStorageUtil_sell();
const LocalStorageUtil_PROMO = new LocalStorageUtil_promo();
const LocalStorageUtilPRODUCTS = new LocalStorageUtil_products();