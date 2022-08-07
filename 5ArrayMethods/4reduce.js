//reduce method

const numbers = [3, 35, 2, 5, 2]

//sum of all elements in array using reduce method

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator)
    return accumulator + currentValue
})

console.log(`sum is ${sum}`)


//////////objets inside array
//calculate the sum of price of all products

const myCart = [{ id: 1, name: 'hamam', price: 30 },
{ id: 2, name: 'cinthol', price: 25 },
{ id: 3, name: 'medimix', price: 35 }]

const sumPrice = myCart.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue.price
},0)  //initial value of accumulator 0

console.log(`total price is ${sumPrice}`)


////detailed explanation

/* consider array 

const array = [ 1,2,3,4]

////if initial value of accumlator not provided then by default

accumulator = array[0] (ie) 1
currentValue = array[1] (ie) 2

////id initial value of accumulator is provided then

accumulator = (initialised value)
currentValue = array[0] (ie) 1

*/