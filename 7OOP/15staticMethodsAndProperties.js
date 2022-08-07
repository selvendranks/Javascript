// static methods and properties
//cant be called with object instance use class name directly

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    static desc = 'creator is a mitsuri fan'  //static properties
    static classInfo(){   //static method
         return `this a class with animal properties`
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

//access static properties and methods
console.log(Animal.classInfo())
console.log(Animal.desc)