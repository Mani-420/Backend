const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
.then(() => {console.log("connected");})
.catch((err) => {console.log(err);});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Inserting data into data bases one by one--------------------
const chats = [
    {
        sentFrom: "Mani",
        sentTo: "Hamza",
        message: "Hello, how are you?",
        createdAt: new Date()
    },
    {
        sentFrom: "Hamza",
        sentTo: "Mani",
        message: "I'm good, thanks! How about you?",
        createdAt: new Date()
    },
    {
        sentFrom: "Mani",
        sentTo: "Hamza",
        message: "I'm doing well too, thanks for asking!",
        createdAt: new Date()
    },
    {
        sentFrom: "Hamza",
        sentTo: "Mani",
        message: "That's great to hear!",
        createdAt: new Date()
    },
    {
        sentFrom: "Mani",
        sentTo: "Hamza",
        message: "What have you been up to lately?",
        createdAt: new Date()
    },
    {
        sentFrom: "Hamza",
        sentTo: "Mani",
        message: "Not much, just working and relaxing.",
        createdAt: new Date()
    },
    {
        sentFrom: "Mani",
        sentTo: "Hamza",
        message: "Sounds nice. Anything exciting happening?",
        createdAt: new Date()
    },
    {
        sentFrom: "Hamza",
        sentTo: "Mani",
        message: "Not really, just the usual stuff.",
        createdAt: new Date()
    },
    {
        sentFrom: "Mani",
        sentTo: "Hamza",
        message: "Well, let me know if anything comes up!",
        createdAt: new Date()
    },
    {
        sentFrom: "Hamza",
        sentTo: "Mani",
        message: "Sure thing! Same goes for you.",
        createdAt: new Date()
    },
];

Chat.insertMany(chats)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err);})
// -------------------------------------------------------------