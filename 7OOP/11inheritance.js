
class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(food){
        return `${this.name} is eating ${food}`
    }
    isDangerous(){
        return this.age >= 1;
    }
}

const animal1 = new Animal('tiger',3)
console.log(animal1)
console.log(animal1.isDangerous())
console.log(animal1.eat('meat'))

class Dog extends Animal{
    
}

const dog1 = new Dog('Ravi',2);
console.log(dog1)
console.log(dog1.isDangerous())