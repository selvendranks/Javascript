//add a new html element to the document

//inner html to add element 

let about = document.querySelector('.about')
console.log(about.innerHTML)

about.innerHTML += '<h3>it is me </h3>'

console.log(about.innerHTML)


//adding elements using innerHTML causes performance issues



