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


// app.patch("/messages", async (req, res) => {
//   await new Chat({
//     sentFrom: req.body.sentFrom,
//     sentTo: req.body.sentTo,
//     message:req.body.message,
//     createdAt:Date.now()
//   }).save()
//   res.redirect("/")
// });

// app.get("/message/edit", async (req, res) => {
//   const chatObj = await Chat.findById(req.params.id);
//   console.log(chatObj);
//   res.render("index",{messages: await Chat.find({}),user:currUser});
// });

// app.get("/message/:id/edit", async (req, res) => {
//   Chat.findById(req.params.id).then(msg=>{
//     res.render("message",{msg,user:currUser})
//   });
// });

// app.patch("/message/:id", async (req, res) => {
//   Chat.findByIdAndUpdate((req.params.id),{message:req.body.msg},{new:true}).then(()=>{
//     res.redirect("/")
//   })
// });

// app.delete("/message/:id", async (req, res) => {
//   Chat.findByIdAndDelete(req.params.id).then(res=>{
//     console.log(res);
//   })
//   res.redirect("/")
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});