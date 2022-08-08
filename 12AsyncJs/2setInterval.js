//SetInterval
//set interval method is triggered every (amount of time) sprcified


//small example where background color keeps changing randomly
//until you click on stop button

const button = document.querySelector('.button')

generateRandom = ()=>{
    return Math.floor(Math.random()*255)
}

randomColor = ()=>{
     return `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`
}

const id = setInterval(()=>{
    document.body.style.backgroundColor = randomColor();
},1000)

button.addEventListener('click',()=>{
    clearInterval(id)  //clear interval
})