//objecy inside array
//very usefull in real life scenario

const users =[
    { id: 1, name:'Selva',gender:'male'},
    { id: 2, name:'Murali',gender:'male'},
    { id: 3, name:'cloe',gender:'female'}
]

for(let user of users){
    console.log(`${user.name} is ${user.gender}`)
}

//destructure
const [{user1:user},user2,{...otherUsers}] = users
console.log(user,user2, otherUsers)