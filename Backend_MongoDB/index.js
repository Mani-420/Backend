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
const Employee = mongoose.model("Employee", userSchema);

// -------------------------------------------------------------

// Inserting data into data bases one by one--------------------
const user1 = new User({name: "Mani", email: "mani@gmail.com", age: 23});
const user2 = new User({name: "Hamz", email: "hamza@gmail.com", age: 18});

user1.save()
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

user2.save()
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

// -------------------------------------------------------------

// Inserting data into data bases Many Users--------------------
User.insertMany([
    {name: "Mithu", email: "mani@gmail.com", age: 23},
    {name: "Farhan", email: "farhan@gmail.com", age: 21},
    {name: "Prince", email: "prince@gmail.com", age: 20},
]).then(res => {console.log(res)})
.catch(err => {console.log(err)});

// -------------------------------------------------------------

// Finding user from data bases---------------------------------
User.find({})
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

User.find({age: {$gt: 21}})
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

// -------------------------------------------------------------

// Updating user from data bases--------------------------------
User.updateOne({name: "Mithu"}, {age: 24})
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

User.updateMany({age: {$gt: 21}}, {age: 25})
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

// -------------------------------------------------------------

// finding and Updating user from data bases--------------------------------
User.findOneAndUpdate({name: "Mithu"}, {age: 24}, {new: true})
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

// -------------------------------------------------------------

// Deleting user from data bases--------------------------------
User.deleteOne({name: "Mithu"})
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

User.findByIdAndDelete("678b9b6ad2725da391531b2a")
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

// -------------------------------------------------------------