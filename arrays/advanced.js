//!Reference types
// [] === []  => false
// [1]===[1] => false

const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };

obj1 === obj2 //true;
obj1 === obj3 //false

obj1.value = 15;
({ obj1: obj1, obj2: obj2 })// => { obj1: { value: 15 }, obj2: { value: 15 } }

/**
 * Objects and arrays are reference types as they are mutable
 * !Here the obj1 and obj2 points to the same location or address in the memory where the defined object is stored it is not pointing to the value. Also obj3 is pointing to a new location where the other object is stored.
 * Arrays are also objects in JS
 */

//!Context
/**
 * Contexts are different from the scope
 * !Context says where we are within the object (this). It is the object env that we are in.
 */

//!Instantiation
//Making the copy of the object and reuse it. This is done using class

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        console.log(this);
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

const player1 = new Player('Dobby', 'elf');

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log(this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`)
    }
}

const wizard = new Wizard('Shelly', 'Healer');
wizard.play();
wizard.introduce();