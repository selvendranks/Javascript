//keypress event
//mouse over event
//mouseleave etc

const body = document.body;

body.addEventListener('keypress',function(obj){
    console.log(obj.key)
})

const buttons = document.querySelectorAll('.buttons button')

buttons.forEach((button)=>{
    button.addEventListener('mouseover', function() {
        console.log(this.textContent)
 })
})


buttons.forEach((button)=>{
    button.addEventListener('mouseleave', function() {
        console.log(this.textContent)
 })
})