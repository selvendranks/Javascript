//rest parameters

function myFunc(a,b,...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

myFunc(1,2,2,5,2,6,77)


////function to add sum of given numbers

function sumNum(...nums){
    let sum = 0
    for(let num of nums){
        sum += num
    }
    return sum
}

console.log(sumNum(1,5,6,2,4,7))