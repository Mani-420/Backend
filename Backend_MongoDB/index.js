const mongoose = require('mongoose');
const { Schema } = mongoose;


// Connecting with database (Mongoose)-------------------------
main()
.then((res) => {console.log("Connection Successful")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
// -------------------------------------------------------------

// Schema for databases----------------------------------------
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
// -------------------------------------------------------------

// Models and Collections for data bases------------------------
const User = mongoose.model("User", userSchema);
// // const Employee = mongoose.model("Employee", userSchema);

// // -------------------------------------------------------------

// // Inserting data into data bases one by one--------------------
// const user1 = new User({name: "Mani", email: "mani@gmail.com", age: 23});
// const user2 = new User({name: "Hamz", email: "hamza@gmail.com", age: 18});

// user1.save()
// .then(res => {console.log(res)})
// .catch(err => {console.log(err)});

// user2.save()
// .then(res => {console.log(res)})
// .catch(err => {console.log(err)});

// -------------------------------------------------------------

// Inserting data into data bases Many Users--------------------
User.insertMany([
    {name: "Mithu", email: "mani@gmail.com", age: 23},
    {name: "Farhan", email: "farhan@gmail.com", age: 21},
    {name: "Prince", email: "prince@gmail.com", age: 20},
]).then(res => {console.log(res)})
.catch(err => {console.log(err)});


// -------------------------------------------------------------