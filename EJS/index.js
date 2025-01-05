const express = require('express');
const app = express();

const PORT = 8080;
const path = require('path');


// --------------------------------------------------
// Setting view engine---
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// --------------------------------------
// Routes
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// -------------------------------------------
// app.get("/ig/:username", (req, res) => {
//         const followers = ["Mani", "Hamza", "Farhan"];
//         let {username} = req.params;
//         res.render("instagram.ejs", {username, followers});
// });
    

// -------------------------------------------
app.get("/insta/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", {data});
});

// ------------------------------------------
app.get("/rolldice", (req, res) => {
    let dicValue = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {dicValue});
});


// --------------------------------------------------
// Listen port---
app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
});