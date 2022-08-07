//dot vs []

//with [] we can access keys with spaces
const person = {
    name: 'Selvendran',
    age: '19',
    role: 'swordsmen',
    breathing: 'Atomic',
    interest: ['videoGames','coding','savingTheWorld'],
    "professional interest" : ['burn demons','date demons']
}

console.log(person.name)
console.log(person['name'])
console.log(person['professional interest'][1])

//inserting a value as a key

let key = 'email'
person[key] = 'selvendranks@gmail.com'

console.log(person)