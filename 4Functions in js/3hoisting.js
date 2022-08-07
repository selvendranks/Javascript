//hoisting

//it is technique to call a function before declaring
//but this technique gives error incase of function expression

console.log(hello('peter'))

function hello(person){
    return `happy birthday ${person}`
}