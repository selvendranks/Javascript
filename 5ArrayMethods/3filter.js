//filter method
//filter method always returns a true or false value


const numbers = [1, 24, 5, 3, 5,7,5,4,2]

//filter even numbers
console.log('even numbers')
const evenNumbers = numbers.filter((ele)=> ele%2 == 0 )
console.log(evenNumbers)

//filter odd numbers
console.log('odd numbers')
const oddNumbers = numbers.filter((ele)=> ele%2 == 0 )
console.log(oddNumbers)
