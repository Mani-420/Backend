const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Data for posts
let posts = [
    {
        username: "Mani",
        content: "I am a Fullstack developer",
    },
    {
        username: "Hamza Habib",
        content: "I am a Machine Learner",
    },
    {
        username: "Farhan Khalid", 
        content: "I am a expert backend developer",
    }
]

// Requests
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
});

// Listener
app.listen(PORT, () => {
    console.log(`App listening to PORT: ${PORT}`);
});