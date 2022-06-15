//Maps

const person = new Map()
//add key value pairs
person.set('firstname','Selva')
person.set('age', 19)
person.set(1,'one')
person.set([1,2,3],"oneTwoThree")
person.set({1:'one'},'1One')

console.log(person)
console.log(person.get('firstname'))
console.log(person.keys())

for(let key of person.keys()){
    console.log(`${key} : ${person.get(key)}`)
}

for(let [key,value] of person){
    console.log(key,value)
}

//pass key value pair directly to the constructor

const user = new Map([['age',19],[{1:'one'},'1One']])
console.log(user)

//Map obj to obj

const person1 = {
    id : 1,
    name: 'Selva'
}

const userInfo = new Map()
userInfo.set(person1,{age:19, gender: 'male'})

let name = person1.name
let age = userInfo.get(person1).age
console.log(`age of ${name} is ${age}`)