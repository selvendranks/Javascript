//Declare a function

function singHappyBirthdaySong() {
    console.log('Happy birthday to you !!!')
}

function sumTwoNumbers(a, b) {
    return a + b
}

function makeArray(a,b,c,d){
    return [a,b,c,d]
}

function destructureArray(a){
    return a
}

singHappyBirthdaySong()
console.log(sumTwoNumbers(3, 5))

console.log(makeArray(3,2,1,5))
console.log(...destructureArray([3,34,5,23]))


//function to check even
function checkEven(a){
    return a%2==0;
}

console.log(checkEven(134))

//function return first character of string

function first(a){
    return a[0]
}

console.log(first('donkey'))

//find index of element in an array

function index(array,ele){
     return array.indexOf(ele)
}

console.log(index([2,3,4,5],4))



////////////////// function expression

const threeNumber = function(a,b,c){
    return a+b+c
}

const sum = threeNumber(3,4,5)
console.log(sum)