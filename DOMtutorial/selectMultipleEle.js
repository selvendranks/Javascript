//get multiple elements using querySelectorAll

let navItems = document.querySelectorAll('a')
console.log(navItems)
console.log(navItems[2].getAttribute('href'))


//convert all ele color into green and background-color into white

for(let navItem of navItems){
    navItem.style.color = 'green'
    navItem.style.backgroundColor = 'white'
}

//convert list into array and using foreach loop

navItems = Array.from(navItems)
console.log(Array.isArray(navItems))
console.log(navItems)

navItems.forEach(element => {
    element.style.color = 'red`'
    element.style.backgroundColor = 'white'
});


