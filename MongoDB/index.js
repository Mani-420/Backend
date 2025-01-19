const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const method_override = require("method-override");
const PORT = 8080;

app.set('view engine',"ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "public")));
app.use(method_override("_method"))
app.use(express.urlencoded({ extended: true }));


main()
.then(() => {console.log("connected");})
.catch((err) => {console.log(err);});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// const currUser = "Abdul Rehman";
// const currReciever = "Tahir Mehmood";

// Index Route ------------------------------------------------
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});
// ------------------------------------------------

// New Route ------------------------------------------------
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});
// ------------------------------------------------

// New Route ------------------------------------------------
app.post("/chats", (req, res) => {
    let {sentFrom, sentTo, message} = req.body;
    let newChat = new Chat({
        sentFrom: sentFrom,
        sentTo: sentTo,
        message: message,
        createdAt: new Date() 
    });
    newChat.save()
    .then(res => {console.log("Chat was saved")})
    .catch(err => {console.log(err)});
    res.redirect("/chats");
});

// Edit Route ------------------------------------------------
app.get("/chats/:id/edit", async (req, res) => {
    let {id}= req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {message: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {message: newMsg},
        {runValidators: true, new: true});
        res.redirect("/chats")
    });
    // ----------------------------------------------------------
    
app.get("/", (req, res) => {
    res.send("This is home page. Type /chats to read chats");
});
// ----------------------------------------------------------
    
// Delete Route ------------------------------------------------
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});