//map function 

//map function works similar to forEach , it takes callback as an argument
// difference is that map functions forms an array of returnes values

const numbers = [1, 24, 5, 3, 5,4,6]


const newArray = numbers.map((number,index) => {
    return number * 2
})

console.log(newArray)

////array of objects

const array = [{ name: 'monkey', age: 15 },
               { name: 'luffy', age: 19 },
               {name: 'selva', age: 19}
               ]

const newArray2 = array.map(({name , age})=>`Age of ${name} is ${age}`)

console.log(newArray2)