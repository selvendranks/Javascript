//Event capture with bubbling effect

//In this case first the capture occurs and later the bubbling


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



document.body.addEventListener('click',()=>{
    console.log('clicked on body')
})          //event of body will be played

grandparent.addEventListener('click',()=>{
    console.log('clicked on grandparent')
})        //event of  grandparent and body will be played

parent.addEventListener('click',()=>{
    console.log('clicked on parent')
})        //event of parent , grandparent and body will be played

child.addEventListener('click',()=>{
    console.log('clicked on child')
})        //event of child, parent, grandparent and body will be played


