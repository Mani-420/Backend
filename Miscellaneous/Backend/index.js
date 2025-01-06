const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, pass} = req.query;
    res.send(`Standard Get Response ${user}`);
})

app.post("/register", (req, res) => {
    let {user, pass} = req.body;
    // console.log(req.body);
    res.send(`Standard Post Response. Welcome ${user}`);
})

// ---------------------------------------------
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});