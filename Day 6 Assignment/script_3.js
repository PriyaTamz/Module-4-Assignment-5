
class Person{
    constructor(firstname, lastname, age, gender, address, phonenumber){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phonenumber = phonenumber;
    }

    getFullname(){
        return `${this.firstname} ${this.lastname}`;
    }

    getDetails(){
        return {
            fullname: this.getFullname(),
            age: this.age,
            gender: this.gender,
            address: this.address,
            phonenumber: this.phonenumber
        }
    }

    setAddress(address){
        this.address = address;
        return `Updated address is ${this.address}`; 
    }
}

var info = new Person("VishnuPriya", "Thamilarasan", 27, "Female", "Tenkasi", 9940995669);

console.log(info.getDetails());

console.log(info.setAddress("Banglore"));

console.log(info.getDetails().address);

console.log(info.getDetails());



/*
{ fullname: 'VishnuPriya Thamilarasan',
  age: 27,
  gender: 'Female',
  address: 'Tenkasi',
  phonenumber: 9940995669 }
Updated address is Banglore
Banglore
{ fullname: 'VishnuPriya Thamilarasan',
  age: 27,
  gender: 'Female',
  address: 'Banglore',
  phonenumber: 9940995669 }
*/