// Object -----------------------------------
// const student1 = {
//     name: "mani",
//     age: 22,
//     marks: 95,
// }


// Factory Function -----------------------------------
// function personMaker (name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`My name is: ${this.name}`);
//         }
//     };
//     return person
// }

// let p1 = personMaker("mani", 22);
// console.log(p1.talk())


// New Operator and Constructor -----------------------------------
// function Person (name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    
// Person.prototype.talk = function (){
    //     console.log(`My name is: ${this.name}`);
    // }
    
    // let p1 = new Person("mani", 22);
// let p2 = new Person("mithu", 23);
// console.log(p1.talk())
// console.log(p2.talk())


// Classes and Inheritance -----------------------------------
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name}.\nMy age is ${this.age}.`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }

    greet(){
        return "Hello";
    }
}

let p1 = new Person("Mani", 23);
let s1 = new Student("Mithu", 25, 95);
console.log(s1.talk());