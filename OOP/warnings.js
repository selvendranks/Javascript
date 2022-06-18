//mistakes you should avoid as a programmer

const person1 ={
    name : 'selva',
    age : 18,
    about : function(interest='none',hates='none'){
        console.log(`person name is ${this.name} and age is ${this.age} and he likes ${interest} and hates ${hates}`)
    }
}

//don't do this

const myFunc = person1.about;
myFunc();

//instead use this 

const myFunc2 = person1.about.bind(person1)
myFunc2();