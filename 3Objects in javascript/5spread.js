//spread operator 

//array

const array1 = [1, 13, 4]
const array2 = [3, 5, 2]

const newArray = [...array1, ...array2, 56, 23]
const newArray2 = [..."234536366"]

console.log(newArray)
console.log(newArray2)

//objects

const obj1 = {
    key1: "value1",
    key2: 'value2'
}

const obj2 = {
    key1: 'value5',
    key3: 'value3',
    key4: 'value4'
}

const newobj1 = {...obj1,...obj2,key5 : 'bot'}
const newobj2 = {..."avaddg"}
console.log(newobj1)
console.log(newobj2)


