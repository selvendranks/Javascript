//callback function

//print sum of square of numbers in an array

function squares(array) {
    const squared = []
    for (let ele of array) {
        squared.push(ele * ele)
    }
    return squared
}

function sumArray(callback, array) {
    let sum = 0
    const squaredArray = callback(array)
    for (let ele of squaredArray) {
        sum += ele;
    }
    console.log(squaredArray)
    return sum
}

console.log(sumArray(squares, [1, 2, 3]))