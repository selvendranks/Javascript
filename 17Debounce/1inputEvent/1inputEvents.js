const myInput = document.getElementById('input-event')

//keyup  abvious
//input   when change in input value
//change  when input changed and when on blur

myInput.addEventListener('input',(e)=>{
    console.log(e.target.value)
})