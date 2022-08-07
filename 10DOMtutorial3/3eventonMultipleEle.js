//apply event on multiple events

const buttons = document.querySelectorAll('.buttons button')

// for (let button of buttons) {
//     button.addEventListener('click', function() {
//            console.log(this.textContent)
//     })
// }


buttons.forEach((button)=>{
    button.addEventListener('click', function() {
        console.log(this.textContent)
 })
})