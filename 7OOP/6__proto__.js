// __proto__ or [[prototype]]
//it is a reference of one object to another object
//it is useful when you are trying to access some value in a obj and 
//you could'nt find it , you can automatically configure it to see on 
//the reference object

const obj = {
    name : 'Selva',
    age : 19
}

const obj2 = Object.create(obj) //created a reference
obj2.roll = 229

console.log(obj2.__proto__)
console.log(obj2.name)

//now lets improve the program in factoryFunction.js

const userMethods = {
    about : function(){
        return `${this.firstname} is ${this.age} years old`
    },
    is18 : function(){
        return this.age>=18
    }
}

function createUserVersion2(firstname,lastname,email,age,address){
    const user = Object.create(userMethods)
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.age = age
    user.address = address
    // user.about = userMethods.about
    // user.is18 = userMethods.is18
    return user
}

const user2 = createUserVersion2('selva','ks','alienkiller@mon.com',18,'my address')
console.log(user2.about())
console.log(user2.is18())
console.log(user2.__proto__)