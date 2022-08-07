//Getters ans Setters
//getter method allows you to treat function like a property

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get fullName(){ //get recieves no parameter
        return `${this.firstName} ${this.lastName}`
    }

    set setName(fullName){ //set recieves exaclty one parameter
        
        const [firstName ,lastName] = fullName.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person('Selva','ks',19)
console.log(person1.fullName) //use function like a property call fullName
person1.setName = 'Mitsuri Kanroji' // call setName and pass fullName
console.log(person1)