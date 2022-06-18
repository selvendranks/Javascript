// new keyword
//1. create empty object this = {}
//2. return this
//3. automatically sets __proto__ to prototype

function createUser(name,age){
     this.name = name
     this.age = age
}

createUser.prototype.about = function(){
    console.log(this.name,this.age)
}

const user1 = new createUser('selva',18)
console.log(user1)
user1.about()

//improve the previous example with new keyword

function createUserVersion2(firstname, lastname, email, age, address) {
    // const user = Object.create(createUserVersion2.prototype)
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
    this.age = age
    this.address = address
    // user.about = userMethods.about
    // user.is18 = userMethods.is18
    // return user
}

createUserVersion2.prototype.about = function () {
    return `${this.firstname} is ${this.age} years old`
}

createUserVersion2.prototype.is18 = function () {
    return this.age >= 18
}

const user2 = new createUserVersion2('selva', 'ks', 'alienkiller@mon.com', 18, 'my address')
console.log(user2.about())
console.log(user2.is18())
console.log(user2.__proto__)


//display all keys of the user2 object

for(let key in user2){
 console.log(key)
}

//display keys except prototype
console.log("///////////////////")

for(let key in user2){
    if(user2.hasOwnProperty(key)){
        console.log(key)
    }
}