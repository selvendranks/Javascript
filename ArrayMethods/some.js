//some method 

//returns a bool true if any one elements of the array satisfies the condition

//check if any one elements in array is even
const array = [1,3,9,5,7]

let isEven = array.some((ele)=>ele%2==0)
console.log(isEven)



const newArray2 = [7,9,5,2,6]

isEven = newArray2.some((ele)=>ele%2==0)
console.log(isEven)

////object in array

const myCart = [
    { id: 1, name: 'hamam', price: 30 },
    { id: 2, name: 'cinthol', price: 25 },
    { id: 3, name: 'medimix', price: 35 }]

const isCheap = myCart.some((product)=> product.price < 30)
console.log(isCheap)