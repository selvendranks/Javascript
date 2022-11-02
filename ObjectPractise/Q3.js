// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };


let count =0

for(let key in student){
   count ++
}

console.log(count)