//loops

let fruits = ['apple','orange','mango']
const fruits2 = []

for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase())
}

console.log(fruits2)


//if you declare a const array you can push into it as the 
// address remains the same but where as you can't reassign the 
// same variable to another array

//fruits2 = ['don'] (throws an error)
// fruits2.push('item') (works fine)


//for of loop

for(let fruit of fruits){
    console.log(fruit)
}

//for in loop

for (let fruit in fruits){
    console.log(fruits[fruit])
}





