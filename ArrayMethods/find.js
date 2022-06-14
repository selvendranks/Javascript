//find method 
//find method works with bool 
//works just like filter but instead of returning a array returns the first value which matches the condition

const myArray = ['Melle', 'god', 'donkey', 'kernel', 'bot', 'don']

const element = myArray.find((string) => {
    return string.length === 3
})

console.log(element)

/////obj in array

const myCart = [
    { id: 1, name: 'hamam', price: 30 },
    { id: 2, name: 'cinthol', price: 25 },
    { id: 3, name: 'medimix', price: 35 }]

const found = myCart.find((ele) => {
    return ele.price < 30
})

console.log(found)