//call Apply Bind

function about(interest='none',hates='none'){
    console.log(`person name is ${this.name} and age is ${this.age} and he likes ${interest} and hates ${hates}`)
}

const person1 ={
    name : 'selva',
    age : 18,
    about : function(interest='none',hates='none'){
        console.log(`person name is ${this.name} and age is ${this.age} and he likes ${interest} and hates ${hates}`)
    }
}

const person2 ={
    name : 'mitsuri',
    age : 19,

}

//call method allows you to use function from different object
//specifying this of another object

person1.about.call(person2) //calls person1 func but this specify person2

person1.about.call(person2,'chess','swimming')

about.call(person2,'chess','swimming')

//apply method works just like call but instead of specifying extra
//arguments individualy you can make array for it

person1.about.apply(person2,['chess','swimming'])

about.apply(person2,['chess','swimming'])

//apply method is used to make a func so that it can be used in the feature

const person2Details = person1.about.bind(person2,['chess','swimming'])
person2Details()