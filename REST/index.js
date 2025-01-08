const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Data for posts
let posts = [
    {
        id: uuidv4(),
        username: "Mani",
        content: "I am a Fullstack developer",
    },
    {
        id: uuidv4(),
        username: "Hamza Habib",
        content: "I am a Machine Learner",
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

// Update Request
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.params.content;
    let post = posts.find( (p) => id === p.id);
    post.content = newContent;
    res.render("show.ejs", {post});
});

// Listener
app.listen(PORT, () => {
    console.log(`App listening to PORT: ${PORT}`);
});