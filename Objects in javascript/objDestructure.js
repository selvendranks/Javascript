// object destructure

const person = {
    name: 'Selvendran',
    age: '19',
    role: 'swordsmen',
    breathing: 'Atomic',
    interest: ['videoGames','coding','savingTheWorld']
}

const {age:myAge , name, ...restProperties}  = person
console.log(myAge,name,restProperties)
