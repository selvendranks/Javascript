// Write a JavaScript function to check whether an object contains given property

function CheckIfPropertyExists(object,property){
   
    const properties = Object.getOwnPropertyNames(object);
    return properties.includes(property)

}

console.log(CheckIfPropertyExists(Array,'length'))
console.log(CheckIfPropertyExists(Array,'unKnownProperty'))