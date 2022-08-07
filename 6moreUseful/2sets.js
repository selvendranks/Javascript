//sets
//sets have their own method 
//no index based access
//no dupicate of items
//order not guranteed

const number = new Set();
console.log(number)


const array = [1, 2, 3, 4]
number.add(1)
number.add([1, 2, 4])
number.add([1, 2, 4]) //this adds into set even if duplicate because 
// they belong to different address space

number.add(array)
number.add(array)//this won't add because they belong to the same address space

console.log(number)

//has method

console.log(number.has([1,2,4])) //returns false even if exists due to different address space
console.log(number.has(array)) //returns true as expected


///iterating in set
for(let ele of number){
    console.log(ele)
}

/////////creating a set with existing array

const array1 = [2,5,5,6,2,4,7,4,74]
const uniqueElements = new Set(array1)
console.log(uniqueElements)
