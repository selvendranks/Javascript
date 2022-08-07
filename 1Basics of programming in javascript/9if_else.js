let age = prompt("Enter age: ") //prompt takes a string as input
let power = prompt("Enter power: ")

if (age >= 18 && power>=10) { console.log('eligible to vote') }
else { console.log("not eligible") }

//nested if else

if(age>=18){
    if (power>=10){
        console.log('eligible to vote')
    }
    else{
        console.log("not eligible")
    }
}
else{
    console.log('not eligible to vote')
}

//ternary operator
let drink = age >=5 ? "coffee":"milk";
console.log(drink)

console.log(`Sum of age and power :${+age + +power}`)