//every method 

//returns a bool true if all elements of the array satisfies the condition

//check if all elements in array is even
const array = [1,3,4,5,6]

let isEven = array.every((ele)=>ele%2==0)
console.log(isEven)



const newArray2 = [10,8,4,2,6]

isEven = newArray2.every((ele)=>ele%2==0)
console.log(isEven)

////object in array

const myCart = [
    { id: 1, name: 'hamam', price: 299 },
    { id: 2, name: 'cinthol', price: 45 },
    { id: 3, name: 'medimix', price: 35 }]


    function check(product){
        return product.price > 30
    }
const isCheap = myCart.every(check)


console.log(isCheap)

