let age = 19
let firstName = "selva"

//typeof()
console.log(typeof age)
console.log(typeof firstName)

//convert number into string
age = age + "";
console.log(typeof (age + ""));
console.log(typeof(String(age)))

//convert string to number
let age2 = "19"
console.log(typeof(+age2))
console.log(typeof(Number(age2)))

let about  =  `my name is ${firstName} and my age is ${age}`
console.log(about)


