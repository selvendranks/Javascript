//splice method
//start ,delete, insert

const array = [1,3,9,5,7,56,34,6,45,3]

//delete
const clone1 = [...array]
let deleted = clone1.splice(1,3)
console.log(clone1)
console.log('deleted',deleted)

//insert
const clone2 = [...array]
deleted = clone2.splice(3,0,-5,-6,-7) //inserted ele 4 into position 3
console.log(clone2)
console.log(deleted)

//insert and delete
const clone3 = [...array]
deleted = clone3.splice(1,3,-1,-2) //inserted two values in between
console.log(clone3)
console.log('deleted',deleted)
