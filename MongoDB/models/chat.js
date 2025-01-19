const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    sentFrom:{
        type:String,
        required:true,
    },
    sentTo:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        maxLength: 50,
    },
    createdAt:{
        type: Date,
        required: true,
    }
})

Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat;