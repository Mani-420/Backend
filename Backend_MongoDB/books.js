const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connecting with database (Mongoose)-------------------------
main()
.then((res) => {console.log("Connection Successful")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
// -------------------------------------------------------------

// Schema for databases----------------------------------------
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [15, "Price is too low for amazon."]
    },
});

// -------------------------------------------------------------
// Models and Collections for data bases------------------------
const Book = mongoose.model("Book", bookSchema);

// -------------------------------------------------------------

// Inserting data into data bases one by one--------------------
const book1 = new Book({
    title: "Calculus",
    author: "Abdul Rehman",
    price: 250
});
book1.save()
.then(res => {console.log(res)})
.catch(err => {console.log(err)});

// -------------------------------------------------------------