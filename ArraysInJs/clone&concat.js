//clone array

let array1 = ['item1','item2']

//three ways of cloning
let array2 = array1.slice(0)
array2 = [].concat(array1)
array2 = [...array1]

console.log(array1===array2)

//concat

let array3 = [...array1].concat(['item3'])
array3 = [...array3, 'item4']
console.log(array3)



