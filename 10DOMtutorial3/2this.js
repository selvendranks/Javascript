//this keyword

const btn = document.querySelector('h2 button')

btn.addEventListener('click',function(){
    console.log('you clicked mitsuri')
    console.log(this)
})

