//timeout
//set min delay of a function

console.log('immediate')

const hello = (last = 'timeout') => {
    console.log(`${last}take 0ms to print`)
}

const id1 = setTimeout(hello,1000)  
//hello function is not immediately executed as it waits for all
//other code in call stack to be excuted and then starts of 
//with excution of setTimeOut functions



//every setTimeOut function gives value back which id

console.log('end')

for (let i = 0; i < 10000; i++) {
    console.log('hi')
}

hello('last')

const id2 = setTimeout(()=>{
    console.log('took 2s')
},1000)

console.log(id1)
console.log(id2)




