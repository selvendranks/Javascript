//Intro to Events
//mouse click
//keyboard button press
//hover and etc

//Three ways to start a event 

// 1. add event directly to inline html using js

//2. get element in js and use it in script

const btn = document.querySelector('h2 button')

console.dir(btn)
btn.onclick = function(){
    console.log('you clicked me')
}

//3. using addEventListner

btn.addEventListener('click',()=>{
    console.log('you clicked mitsuri')
})

