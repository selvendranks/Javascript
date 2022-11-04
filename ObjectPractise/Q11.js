// 11. Write a JavaScript function to print all the methods in an JavaScript object. Go to the editor
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]


// class Properties{
//     constructor(object){
//         this.Properties = object.this.getOwnPropertyNames()
//     }

//     getFunctions
// }

function Properties(object){
    let Properties = Object.getOwnPropertyNames(object)

    let methods = Properties.filter((obj)=>(typeof(object[obj]) == 'function'))

    return methods

}

console.log(Properties(Array))