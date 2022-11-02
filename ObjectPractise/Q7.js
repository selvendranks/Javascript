// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

let data = "Dog"

for(let  x=0 ; x<data.length; x++){
    for(let y=x;y<data.length; y++){
        console.log(data.substring(x,y+1))
    }
}