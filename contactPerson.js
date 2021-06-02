const input = require("prompt-sync");
const prompt = input();

let addressbook = [];
class addressbookPerson {

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() { return this._firstName; }

    set firstName(firstName) {
        const FIRST_NAME_PATTERN = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (FIRST_NAME_PATTERN.test(firstName)) {
            this._firstName = firstName;
        } else
            console.log("Invalid First Name!!!");
    }

    get lastName() { return this._lastName; }

    set lastName(lastName) {
        const LAST_NAME_PATTERN = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (LAST_NAME_PATTERN.test(lastName)) {
            this._lastName = lastName;
        } else
            console.log("Invalid Last Name!!!");
    }

    get address() { return this._address; }

    set address(address) {
        const ADDRESS_PATTERN = RegExp("[A-Za-z0-9]{4,}$");
        if (ADDRESS_PATTERN.test(address)) {
            this._address = address;
        } else
            console.log("Invalid Address!!!");
    }

    get city() { return this._city; }

    set city(city) {
        const CITY_PATTERN = RegExp("[A-Za-z ]{4,}");
        if (CITY_PATTERN.test(city)) {
            this._city = city;
        } else {
            console.log("Invalid city!!!");
        }
    }

    get state() { return this._state; }

    set state(state) {
        const STATE_PATTERN = RegExp("[A-Za-z ]{4,}");
        if (STATE_PATTERN.test(state)) {
            this._state = state;
        }
        else {
            console.log("Invalid state!!!");
        }
    }

    get zip() { return this._zip; }

    set zip(zip) {
        const ZIP_PATTERN = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (ZIP_PATTERN.test(zip)) {
            this._zip = zip;
        }
        else {
            console.log("Invalid Zip!!!");
        }
    }

    get phoneNumber() { return this._phoneNumber; }

    set phoneNumber(phoneNumber) {
        const PHONE_NUMBER = RegExp("^[1-9]{1}[0-9]{9}$");
        if (PHONE_NUMBER.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            console.log("Invalid Phone Number!!!");
        }
    }

    get email() { return this._email; }

    set email(email) {
        const EMAIL_PATTERN = RegExp("^[a-z0-9]+(([\\._+-][a-z0-9]+)?)\\@[a-z0-9]+\\.(([a-z]{2,4})(\\.[a-z]{2,4})?)$");
        if (EMAIL_PATTERN.test(email)) {
            this._email = email;
        }
        else {
            console.log("Invalid Email!!!");
        }
    }

    toString() {
        return "firstName = " + this.firstName +
            " ,lastName = " + this.lastName +
            " ,address = " + this.address +
            " ,city = " + this.city +
            " ,state = " + this.state +
            " ,zip = " + this.zip +
            " ,phoneNumber = " + this.phoneNumber +
            " ,email = " + this.email;
    }
}

let person1 = new addressbookPerson("Pooja", "Roy", "Saradalane", "Kokrajhar", "Assam", 778330, 3445655756, "pooja14206@gmail.com");
let person2 = new addressbookPerson("Kanika", "Nath", "Paikandra", "Bilashpara", "Assam", 432789, 7689456109, "kanika14205@gmail.com");
let person3 = new addressbookPerson("Haina", "Bty", "Dhaligaon", "Bongaigaon", "Assam", 783456, 9870567412, "haina14211@gmail.com");

addressbook.push(person1);
addressbook.push(person2);
addressbook.push(person3);

function addPerson() {
    let firstName = prompt("enter the first name:");
    for (let i = 0; i < addressbook.length; i++) {
        if (addressbook[i].firstName == firstName) {
            console.log(" person already present!!!");
            addPerson()
        }
    }
    let lastName = prompt("enter the last name: ");
    let address = prompt("enter the address: ");
    let city = prompt("enter the city: ");
    let state = prompt("enter the state: ");
    let zip = Number(prompt("enter the zip: "));
    let phoneNumber = Number(prompt("enter the phone number: "));
    let mail = prompt("enter mail id:");
    let Person = new addressbookPerson(firstName, lastName, address, city, state, zip, phoneNumber, mail)
    addressbook.push(Person)
}

function editByName() {
    let firstNameForEdit = prompt("enter the first name whose detail you want to change:");
    let personToEdit;
    for (let i = 0; i < addressbook.length; i++) {
        if (addressbook[i].firstName == firstNameForEdit) {
            personToEdit = addressbook[i];
            if (personToEdit != null) {
                let input = 1;
                while (input != 0) {
                    console.log("\nChoose to edit: \n1. First Name \n2. Last Name \n3. Address \n4. City \n5. State \n6. Zipcode \n7. Phone Number \n8. Email \n9. exit");
                    input = prompt("Enter Your Choice: ");
                    input = parseInt(input);
                    switch (input) {
                        case 1: let newFirstName = prompt("Enter the firstname: ");
                            personToEdit.firstName = newFirstName;
                            break;
                        case 2: let newLastName = prompt("Enter the last Name: ");
                            personToEdit.lastName = newLastName;
                            break;
                        case 3: let NewAddress = prompt("Enter the address: ");
                            personToEdit.address = newAddress;
                            break;
                        case 4: let newCity = prompt("Enter the city: ");
                            personToEdit.city = newCity;
                            break;
                        case 5: let newState = prompt("Enter the state: ");
                            personToEdit.state = newState;
                            break;
                        case 6: let newZip = prompt("Enter the pincode: ");
                            personToEdit.zip = newZip;
                            break;
                        case 7: let newPhoneNumber = prompt("Enter the phone number: ");
                            personToEdit.phoneNumber = newPhoneNumber;
                            break;
                        case 8: let newMail = prompt("Enter the email: ");
                            personToEdit.email = newMail;
                            break;
                        case 9:
                            input = 0;
                    }
                }
            }
        }

    }
}

function deleteByName() {
    let firstNameForDelete = prompt("enter the first name whose detail you want to delete:");
    for (let i = 0; i < addressbook.length; i++) {
        if (addressbook[i].firstName == firstNameForDelete) {
            addressbook.splice(i, 1);
            i--
        }
    }
}

function countPerson() {
    let count = addressbook.length;
    console.log("number of person in addressbook : " + count);
}

function searchByCity() {
    let cityForSearch = prompt("enter the city for retrive Persons: ");
    for (let i = 0; i < addressbook.length; i++) {
        if (addressbook[i].city == cityForSearch) {
            console.log(addressbook[i]);
        }
    }

}
function countPersonByCity() {
    let cityForSearch = prompt("enter the city for count Persons: ");
    count = 0;
    for (let i = 0; i < addressbook.length; i++) {
        if (addressbook[i].city == cityForSearch) {
            count++;
        }
    }
    console.log("Total number of people live in " + cityForSearch + " : " + count);
}

function sortAlphabaticaly() {
    sortedList = addressbook.sort((firstPerson, secondPerson) => firstPerson.firstName.localeCompare(secondPerson.firstName));
    console.log(sortedList);
}

let choice = 1;

while (choice != 0) {
    console.log("1.Display \n2.Add Person. \n3.Edit Person. \n4.Delete Person. \n5.Total Person." +
        " \n6.Search By City \n7.Count Person By City. \n8.Sort Alphabatically \n9.Exit");
    choice = prompt("enter your choice : ");
    choice = parseInt(choice);

    switch (choice) {
        case 1:
            console.log(addressbook);
            break;
        case 2:
            addPerson();
            console.log(addressbook);
            break;
        case 3:
            editByName();
            console.log(addressbook);
            break;
        case 4:
            deleteByName();
            console.log(addressbook);
            break;
        case 5:
            countPerson();
            break;
        case 6:
            searchByCity();
            break;
        case 7:
            countPersonByCity();
            break;
        case 8:
            sortAlphabaticaly();
            break;
        case 9:
            choice = 0;
    }
}