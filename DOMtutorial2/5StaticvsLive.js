//Static vs Live list

//querySelectorAll gives static list
//queryElementBySomething gives live list


const listItemsQ = document.querySelector('.todo-list')
const listItems = document.querySelectorAll('.todo-list li')

const listItemsC = listItemsQ.getElementsByTagName('li')

const sixsthli = document.createElement('li')
sixsthli.textContent = '6'

const list = document.querySelector('.todo-list')
list.append(sixsthli)

console.log(listItems) //static list
console.log(listItemsC)  //live list


