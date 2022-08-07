//function that creates objects
//below method of object creation is not suitable 
//each time a new user is assigned the same function is repeated which consumes memory

function createUser(firstname,lastname,email,age,address){
    const user = {}
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.age = age
    user.address = address
    user.about = function(){
        return `${this.firstname} is ${this.age} years old`
    }
    user.is18 = function(){
        return this.age>18
    }
    return user
}

const user1 = createUser('selva','ks','alienkiller@mon.com',18,'my address')
console.log(user1.about())

/////////////////now lets solve it

const userMethods = {
    about : function(){
        return `${this.firstname} is ${this.age} years old`
    },
    is18 : function(){
        return this.age>18
    }
}

function createUserVersion2(firstname,lastname,email,age,address){
    const user = {}
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.age = age
    user.address = address
    user.about = userMethods.about
    user.is18 = userMethods.is18
    return user
}

const user2 = createUserVersion2('selva','ks','alienkiller@mon.com',18,'my address')
console.log(user2.about())

