//Event Capture 
//It works just as like event Bubbling but works in the reverse order

const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


document.body.addEventListener('click',()=>{
    console.log('clicked on body')
},true)         

grandparent.addEventListener('click',()=>{
    console.log('clicked on grandparent')
},true)       

parent.addEventListener('click',()=>{
    console.log('clicked on parent')
},true)        

child.addEventListener('click',()=>{
    console.log('clicked on child')
},true)        

 