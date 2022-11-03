// 8. Write a JavaScript program to create a Clock. Go to the editor
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

class Clock {
    constructor(){
        this.cur_date = new Date()
        this.hour = this.cur_date.getHours()
        this.minute = this.cur_date.getMinutes()
        this.second = this.cur_date.getSeconds()
    }

    knowTime(){
        return this.getTime.bind(this,this)  //binds the getTime function with the object and  returns the getTime function
    }

    getTime(){
        return(`${this.hour}:${this.minute}:${this.second}`)
    }
}

const createClock = setInterval(()=>{
        
    const clock  = new Clock()
    console.log(clock.knowTime()())
         
},1000)