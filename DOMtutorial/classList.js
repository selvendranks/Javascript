//display the classes of a element

const form = document.querySelector('form')
console.log(form.classList)

//add class to an element

form.classList.add('bg-dark')

//remove class from an element

form.classList.remove('main-form')

//checks whether the element has the class specified

console.log(form.classList.contains('bg-dark'))


//because it killed a beautiful face
//use toggle to remove if exists and add if does not exist

form.classList.toggle('bg-dark')