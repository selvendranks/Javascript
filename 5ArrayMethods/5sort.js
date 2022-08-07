//sort method

//sort elements in array

const numbers = [2, 1, 34, 25, 999, 45, 2, 453]
// numbers.sort()
//or
numbers.sort((a,b)=>{
    return a-b
})


console.log(numbers)
numbers.sort().reverse()
console.log('Descending: ', numbers)

numbers.sort((a,b) => {
    console.log(a,b)
})

console.log(numbers)


////obj in array
//sort according to price

const products = [
    { id: 1, name: 'hamam', price: 30 },
    { id: 2, name: 'cinthol', price: 25 },
    { id: 3, name: 'medimix', price: 35 }
]

//sort in ascending with clone
const lowToHigh = [... products.sort((a,b)=>{
    return a.price-b.price
})]

console.log(lowToHigh)

// //sort in descending

const highToLow = [... products.sort((a,b)=>{
    return b.price-a.price
})]

console.log(highToLow)