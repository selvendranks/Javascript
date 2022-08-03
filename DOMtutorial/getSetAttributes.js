//get and set attributes

const link = document.querySelector('a')
console.log(link)

//get href of link
console.log(link.getAttribute('href'))

//set href of link
const link2 = document.querySelector('.game')
link2.setAttribute('href','https://www.google.com')
console.log(link2.getAttribute('href'))

const input = document.querySelector('.main-form #username')
console.log(input.getAttribute('type'))
input.setAttribute('type','password')
console.log(input.getAttribute('type'))