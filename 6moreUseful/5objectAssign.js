//clone using object.assign

const obj = {
    key1 : 'value1',
    key2 : 'value2'
}

const obj2 = {...obj}
const obj3 = Object.assign({},obj)

obj.key3 = 'value3'

console.log(obj)
console.log(obj2)
console.log(obj3)

//adding two obj

const obj4 = {
    key1 : 'value1',
    key2 : 'value2'
}

const obj5 = {
    key3 : 'value3',
    key4 : 'value4'
}

console.log(Object.assign(obj4,obj5)) //added obj5 key-values to obj4
console.log(obj4)

const obj6 = console.log({...obj4,...obj5}) //combined and assigned to obj6
