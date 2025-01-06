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


// Classes -----------------------------------
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name}`);
    }
}

let p1 = new Person("Mani", 23);
let p2 = new Person("Gambler", 22);
console.log(p1.talk());