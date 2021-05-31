class contactPerson{

    contactPerson(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName(){return this._firstName;}

    set firstName(firstName){
        const FIRST_NAME_PATTERN = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(FIRST_NAME_PATTERN.test(firstName)) {
            this._firstName = firstName; 
            console.log("First Name " + this._firstName);   
        }else
            console.log("Invalid First Name!!!");
    }

    get lastName(){return this._lastName;}

    set lastName(lastName){
        const LAST_NAME_PATTERN = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(FIRST_NAME_PATTERN.test(lastName)) {
            this._lastName = lastName;    
        }else
            console.log("Invalid Last Name!!!");
    }

    get address(){return this._address;}

    set address(address){
        const ADDRESS_PATTERN = RegExp("[A-Za-z0-9]{4,}$");
        if(ADDRESS_PATTERN.test(address)) {
            this._address = address;    
        }else
            console.log("Invalid Address!!!");
    }

    get city(){return this._city;}

    set city(city) {
        const CITY_PATTERN = RegExp("[A-Za-z ]{4,}");
        if(CITY_PATTERN.test(city)){
            this._city = city;
        } else {
            console.log("Invalid city!!!");
        }
    }

    get state(){return this._state;}

    set state(state) {
        const STATE_PATTERN = RegExp("[A-Za-z ]{4,}");
        if (STATE_PATTERN.test(state)) {
            this._state = state;
        }
        else {
            console.log("Invalid state!!!");
        }
    }

    get zip(){return this._zip;}

    set zipCode(zipCode) {
        const ZIP_PATTERN = RegExp("^[1-9]{1}[0-9]{6}$");
        if (ZIP_PATTERN.test(zipCode)) {
            this._zipCode = zipCode;
        }
        else {
            console.log("Invalid Zip!!!");
        }
    }

    get phoneNumber(){return this._phoneNumber;}

    set phoneNumber(phoneNumber) {
        const PHONE_NUMBER = RegExp("[0-9]{2}[\s][0-9]{10}$");
        if (PHONE_NUMBER.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            console.log("Invalid Phone Number!!!");
        }
    }

    get email(){return this._email;}

    set email(email) {
        const EMAIL_PATTERN = RegExp("^[a-zA-Z0-9]{1,}[.a-zA-Z0-9]*@[a-zA-Z0-9]{1,}((.){1}+)([a-z]{1,3}+)(.[a-z]{2})*$");
        if (EMAIL_PATTERN.test(email)) {
            this._email = email;
        }
        else {
            console.log("Invalid Email!!!");
        }
    }

    toString() {
        return "firstName= " + this.firstName + 
               " ,lastName= " + this.lastName +
               " ,address= " + this.address +
               " ,city= " + this.city +
               " ,state= " + this.state +
               " ,zipCode= " + this.zipCode +
               " ,phoneNumber= " + this.phoneNumber +
               " ,email= " + this.email;
    }
}
 addressbook = new contactPerson("Pooja", "Roy", "Saradalane", "Kokrajhar", "Assam", "783370", "3445655756", "pooja14206@");

console.log(addressbook.firstName);