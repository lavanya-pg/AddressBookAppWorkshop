class AddressBookData {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else {
            throw 'Name is incorrect!';
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([1-9]{1}[0-9]{9}|[9]{1}[1]{1}[1-9]{1}[0-9]{9}|/[+]{1}[9]{1}[1]{1}[1-9]{1}[0-9]{9})$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw 'Phone Number is incorrect!';
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9]{3,}\\s[a-zA-Z0-9]{3,}([ ]|[a-zA-Z0-9]{3,})*?$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else throw 'Address is incorrect!';
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
        this._zip = zip;
    }
}