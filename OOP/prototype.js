//The prototype is an object that is associated with every
// functions and objects by default in JavaScript.
//only functions provide prototype property

//javascript function ---> function + object

function hello() {
    console.log(' i am don')
}

console.log(hello.name) //pre-existing prototype property
console.log(hello.prototype) //object associated with hello function

///create our own prototype property

hello.prototype.creator = 'Selvendran'
hello.prototype.greet = function () {
    return 'hello gentleman'
}
console.log(hello.prototype)

////////////now lets see how to use prototype and __proto__ together

// const userMethods = {
//     about : function(){
//         return `${this.firstname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age>=18
//     }
// }



function createUserVersion2(firstname, lastname, email, age, address) {
    const user = Object.create(createUserVersion2.prototype)
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.age = age
    user.address = address
    // user.about = userMethods.about
    // user.is18 = userMethods.is18
    return user
}

createUserVersion2.prototype.about = function () {
    return `${this.firstname} is ${this.age} years old`
}

createUserVersion2.prototype.is18 = function () {
    return this.age >= 18
}

const user2 = createUserVersion2('selva', 'ks', 'alienkiller@mon.com', 18, 'my address')
console.log(user2.about())
console.log(user2.is18())
console.log(user2.__proto__)