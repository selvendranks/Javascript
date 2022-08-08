//callbacks in ascynchronous js

const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')


//callback hell :- its called that way because there are too many nested statement
//                  one after the other which makes hard to read
setTimeout(()=>{
    heading1.style.color = 'violet'
    setTimeout(()=>{
        heading2.style.color = 'blue'
        setTimeout(()=>{
            heading3.style.color = 'green'
            setTimeout(()=>{
                heading4.style.color = 'yellow'
            },1000)
        },1000)
    },1000)
},1000)
