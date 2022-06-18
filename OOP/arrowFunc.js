//arrow function
//arrow function always uses surrounding this a level 1 higher

//in the below example this represents window

const user1 = {
    name : 'selva',
    age : 18,
    about : ()=>{
        console.log(this)
        console.log(`${this.name} is a very good boy`)
    }
}

user1.about()
