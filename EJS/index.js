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


// --------------------------------------------------
// Listen port---
app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
});