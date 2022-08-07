//a todo script
//if clicked on remove button task is removed
//if cliked on done method the task is striked


///lets add items to the task list
const form = document.querySelector(".input-bar");
const todo = document.querySelector('.todo')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const forminput = document.querySelector('.input-bar input')

    const inputValue = forminput.value
    const newLi = document.createElement('li')

    newLi.innerHTML = `<span>${inputValue}</span>
    <button class="remove">remove</button>
    <button class="done">done</button>`

    todo.append(newLi)
})


//now lets do and remove the task
// primitive method

const li1 = document.querySelectorAll('.todo li .remove')

li1.forEach(ele=>{
    ele.addEventListener('click',function(){
        this.parentNode.remove()
    })
})

const li2 = document.querySelectorAll('.todo li .done')

li2.forEach(ele=>{
    ele.addEventListener('click',function(){
        const task = this.parentNode.querySelector('span');
        task.style.textDecoration = 'line-through'
    })
})

//using event delegation

const todolist = document.querySelector('.todo')

todolist.addEventListener('click',function(e){
    const btn = e.target

    console.log(btn.classList) //gives classes of element

    if(btn.classList.contains('remove')){
        btn.parentNode.remove()
    }

    else if(btn.classList.contains('done')){
        const task = btn.parentNode.querySelector('span');
        task.style.textDecoration = 'line-through'
    }
})
