// 8. Write a JavaScript program to create a Clock. Go to the editor
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

let cur_date = new Date()

const createClock = setInterval(()=>{
         let hour = cur_date.getHours()
         let minute = cur_date.getMinutes()
         let second = cur_date.getSeconds()
         
},1000)