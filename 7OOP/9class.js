//class
//classes are fake internally it uses previous method discussed

class createUser{
    constructor(firstname, lastname, email, age, address){
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.age = age
        this.address = address
    }
    about() {
        return `${this.firstname} is ${this.age} years old`
    }
    
    is18 () {
        return this.age >= 18
    }

    interest(interests){
         this.interest = interests
    }
}

const user2 = new createUser('selva', 'ks', 'alienkiller@mon.com', 18, 'my address')
console.log(user2.about())
console.log(user2.__proto__)
user2.interest(['videoGame','animae','programming'])
console.log(user2)