// object chaining

const user = {
    name : 'harshit',
    // address : {house : 32}
}

console.log(user.address.house) //returns error if does not exists
console.log(user?.address?.house)  //returns undefines if does not exists
