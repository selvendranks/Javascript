
//current date and time
let date = new Date()
console.log(date)

//reference to the begining of date and time
date = new Date(0)
console.log(date)

//full date of the specified date
date = new Date("2055-11-23")
console.log(date)

// new Date(year, month, date , hour , minutes, seconds,millisecond)
date = new Date(2020,4,6,8,9,24)
console.log(date)

//reference to the begining of date and time
date = new Date()
console.log(date.getFullYear())
//many other methods getdate,day,month


//set date
date.setDate(31)
console.log(date)

//prints the current millisecond with first date refernce
console.log(Date.now())