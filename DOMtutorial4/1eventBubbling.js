//event Bubbling

//when a event of an element is played browser checks if there 
//is any event on its parent and grandparent and so on up the hierarchy
//and also plays it

const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


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