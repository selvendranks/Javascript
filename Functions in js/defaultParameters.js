// Default parameters in fulnction
//if no argument is passed default arguments are taken

const threeNumber = (a=0, b=0, c=0) => {
    return a + b + c
}

let sum = threeNumber(3, 4, 5)
console.log(sum)

sum = threeNumber()
console.log(threeNumber())





const  index = (array=[],ele=null) => array.indexOf(ele)


console.log(index([2,3,4,5],4))
console.log(index())