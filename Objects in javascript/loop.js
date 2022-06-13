//loop in object

const person = {
    name: 'Selvendran',
    age: '19',
    role: 'swordsmen',
    breathing: 'Atomic',
    interest: ['videoGames','coding','savingTheWorld'],
    "professional interest" : ['burn demons','date demons']
}


for(let key in person){
    console.log(`${key} : ${person[key]}`)
}

console.log(Object.keys(person))


//print values in for of loop
for(let key of Object.keys(person)){
    console.log(person[key])
}

