let text = "i am the ulti don my bicep size is 35x45 and weight 2.590kg";
let pattern = /(\d+x\d+)/
let pattern2 = /eight (\d+\.?\d+)kg/

let size = text.match(pattern)[1]
let weight = text.match(pattern2)[1]

console.log(`Size of bicep is ${size}`)
console.log(`Weight of biceps is ${weight}`)