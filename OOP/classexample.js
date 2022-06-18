//class practise 

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

const animal1 = new Animal('tiger',2)
console.log(animal1)
console.log(animal1.isDangerous())
console.log(animal1.eat('meat'))