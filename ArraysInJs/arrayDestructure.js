//array destructure

const array = ['item1','item2','item3','item4','item5']

let [var1 , ,var2,...newArray] = array;

console.log('value of var1',var1)
console.log('value of var2',var2)
console.log('value of new array',newArray)