//foreach method pass callback as arguments

const numbers = [1, 24, 5, 3, 5]

function multiply(number, index) {
    console.log(`${number * 2} ${index}`)
}

//normal technique
console.log('normal technique')
for (let i = 0; i < numbers.length; i++) {
    multiply(numbers[i], i)
}

///for each technique
console.log('foreach technique')
numbers.forEach(multiply)

///define function inside foreach
console.log('foreach technique')
numbers.forEach((number, index) => {
    console.log(`${number * 2} ${index}`)
})

console.log('foreach technique')
numbers.forEach(function (number, index) {
    console.log(`${number * 2} ${index}`)
})

///////////array of objects

const array = [{ name: 'monkey', age: 15 },
               { name: 'luffy', age: 19 },
               {name: 'selva', age: 19}
               ]

array.forEach(({name , age})=>{
    console.log(`Age of ${name} is ${age}`)
})