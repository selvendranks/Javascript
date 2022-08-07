//event delegation

const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


grandparent.addEventListener('click', (obj) => {
    console.log(ob.target)
})          //event of grandparent will be played if you click one of its child