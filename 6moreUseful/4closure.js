//function returning function



const myFunction1 = (fname='mitsuri', animal='sparrow')=>{

    const myFunction2 = ()=>{
        return `${fname} is the ${animal} here`
    }
    return myFunction2 
}

const message = myFunction1('selva' , 'dragon')
console.log(message)
console.log(message())

/* the most important thing here is when a function(myfunction2) is returned
from another function(myfunction1) , not only the function is returned but also the
variables contained inside the scope of function(myfunction1) is also returned. 

we call this property as closure*/

//more closure examples

const numbers = (x)=> (y) => x**y
      

const power = numbers(4)
console.log(power(3))


//more example


function func(){
    count = 0
    return ()=>{
        count++
        if(count<=1) return 'you called me'
        else return 'dont disturb me'
    }
}

const message2 = func()
console.log(message2())
console.log(message2())
console.log(message2())
console.log(message2())