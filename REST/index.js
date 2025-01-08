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
        id: "1a",
        username: "Mani",
        content: "I am a Fullstack developer",
    },
    {
        id: "2a",
        username: "Hamza Habib",
        content: "I am a Machine Learner",
    },
    {
        id: "3a",
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

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find( (p) => id === p.id);
    res.render("show.ejs", {post});
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