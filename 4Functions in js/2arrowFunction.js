//Arrow function

const threeNumber = (a, b, c) => {
    return a + b + c
}

const sum = threeNumber(3, 4, 5)
console.log(sum)


///////////easier to way to return without return keyword

//function return first character of string

const first = a => a[0];


console.log(first('donkey'));

//find index of element in an array

const  index = (array,ele) => array.indexOf(ele)


console.log(index([2,3,4,5],4))