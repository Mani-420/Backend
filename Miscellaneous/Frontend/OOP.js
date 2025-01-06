// Object -----------------------------------
// const student1 = {
//     name: "mani",
//     age: 22,
//     marks: 95,
// }


// Factory Function -----------------------------------
function personMaker (name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`My name is: ${name}`);
        }
    };
    return person
}

let p1 = personMaker("mani", 22);
console.log(p1.talk())