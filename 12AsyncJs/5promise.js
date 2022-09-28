//Promise
//A promise object has two items
//1. status : (pending,resolve,reject)
//2.value : 'value returned after callback;

//lets consider a example of making fried rice

console.log('script start')

const ingredients = ['rice', 'vegetables', 'salt']

//now lets make a promise of making fried rice

const friedRicePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (ingredients.includes('rice') && ingredients.includes('vegetables') && ingredients.includes('salt')) {
            resolve('fried rice is ready')
        }
        else {
            reject('lack of ingredients')
        }
    }, 2000)   //2s delay for promise
})


//consume promise
friedRicePromise.then((e) => {
    console.log(e)
}).catch((error) => {
    console.log(`so sad ${error}`)
})


console.log('script end')
