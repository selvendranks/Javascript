
export class Person{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age
    }

    info(){
        console.log(this.fname,this.lname,this.age)
    }
}