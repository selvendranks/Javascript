//method overriding
//when there are methods of same name in base and sub class (obj of sub-class) 
//method from sub class is conidered

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(food){
        return `Animal ${this.name} is eating ${food}`
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
    constructor(name,age,speed){
        super(name,age)  //using constructor of base class
        this.speed = speed
    }

    eat(){
        return `Dog ${this.name} is eating`
    }

    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}

const dog1 = new Dog('Ravi',2,45);
console.log(dog1)
console.log(dog1.isDangerous())
console.log(dog1.run())
console.log(dog1.eat('natos'))