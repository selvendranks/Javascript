// Write a JavaScript function to convert an object into a list of `[key, value]` pairs. Go to the editor

function ObjecttoList(student){

let array = []

for(let key in student){
    array.push([key,student[key]])
}

return array
}

console.log(ObjecttoList({
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }))