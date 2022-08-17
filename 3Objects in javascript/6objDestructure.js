// object destructure

const person = {
    name: 'Selvendran',
    age: '19',
    role: 'swordsmen',
    breathing: 'Atomic',
    interest: ['videoGames','coding','savingTheWorld']
}

const {age:myAge , breathing, ...restProperties}  = person
console.log(myAge,breathing,restProperties)
