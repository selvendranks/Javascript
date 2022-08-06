//event object

// when browser knows that a event has been performed on an element
//Browser
//1. browser gives the callback function to js enginee
//2. browser returns a event object as well as performs the event

const buttons = document.querySelectorAll('.buttons button')

generateRandom = ()=>{
    return Math.floor(Math.random()*255)
}

randomColor = ()=>{
     return `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`
}


buttons.forEach((button)=>{
    button.addEventListener('click', function(obj) {
        console.log(obj)
        console.log(obj.currentTarget)
        let randomcolor = randomColor()
        this.style.backgroundColor = randomcolor
        this.innerText = `${randomColor()}`

 })
})

