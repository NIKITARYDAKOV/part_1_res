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
        const index = pc.inexOf(id);
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
        const index = pc.inexOf(id);
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
        const index = pc.inexOf(id);
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
            return JSON.parse(instrumentseLocalStorage);
        }
        else
            return [];
    }
    putInstruments(id) {
        let instruments = this.getInstruments();
        let push_instruments = false;
        const index = pc.inexOf(id);
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



const localStorageUtil_PC = new LocalStorageUtil_pc();
const localStorageUtil_PHONE = new LocalStorageUtil_phone();
const localStorageUtil_TEHNIC = new LocalStorageUtil_tehnic();
const localStorageUtil_INSSTRUMENTS = new LocalStorageUtil_instruments();