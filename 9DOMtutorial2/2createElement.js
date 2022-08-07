//document.createElement()
//append
//prepend
//remove
//before
//after


//append
const newh2 = document.createElement('h3')
newh2.textContent = 'append'
const h2 = document.querySelector('.about')
h2.append(newh2)

//prepend
const newh3 = document.createElement('h3')
newh3.textContent = 'prepend'
h2.prepend(newh3)


//remove apppend item

newh2.remove()


//add item before element

const newh1a = document.createElement('h1')
newh1a.textContent = 'before'
h2.before(newh1a)

//add items after element

const newh1a = document.createElement('h1')
newh1a.textContent = 'after'
h2.after(newh1a)