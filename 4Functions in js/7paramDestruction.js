/// Param destruction

const person ={
    firstName : 'Selvendran',
    age : 19
}

// function printDetails(obj){
//        console.log(obj.firstName)
//        console.log(obj.age)
// }


function printDetails({firstName,age}){
    console.log(firstName)
    console.log(age)
}

printDetails(person)