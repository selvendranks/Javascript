//change text

const mainHeading = document.querySelector('.logo')

//display name
console.log(mainHeading.textContent) //shows hidden text as well
console.log(mainHeading.innerText) //shows text only visible text

//change text
mainHeading.textContent = 'donkey'
console.log(mainHeading.textContent)
