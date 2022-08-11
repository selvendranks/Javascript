
import {bark as bow,angry} from './utils.js/dog.js';
import {Meow} from './utils.js/cat.js'
import {Person} from './utils.js/person.js'

console.log(bow())
console.log(Meow())
console.log(angry())

const person = new Person('mitsuri','kanroji',19)
person.info()