//primitive datatypes (numbers , strings)

let num1 = 5;
let num2 = num1;
console.log('value of num1',num1)
console.log('value of num2',num2)
num1++
console.log('value after increment')
console.log('value of num1',num1)
console.log('value of num2',num2)

//reference datatypes (array)

let array1 = ['monkey', 'donkey']
let array2 = array1
console.log('value of array1',array1)
console.log('value of array2', array2)
array1.push('dog')
console.log('array after push')
console.log('value of array1',array1)
console.log('value of array2', array2)
