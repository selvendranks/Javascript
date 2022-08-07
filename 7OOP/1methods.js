//methods 
//functions inside object

function tellinfo(){
console.log(`${this.name} is a good boy`)
}

const person ={
    name : 'selva',
    age : 18,
    about : function(){
        console.log(`person name is ${this.name} and age is ${this.age}`)
    },
    info : tellinfo
}

person.about()
person.info()