const express = require('express')
const app = express()
const port = 3000

// app.use() ------------------------------------

// app.use((req, res) => {
//     console.log("Hello World")
//     res.send('Hello Handsome')
// })


// app.get() ------------------------------------
app.get('/', (req, res) => {
    res.send("You contacted Home path.")
})

app.get('/contact', (req, res) => {
    res.send("You contacted contact path.")
})

app.get('/about', (req, res) => {
    res.send("You contacted about path.")
})


app.post('/', (req, res) => {
    res.send("You contacted post root.")
})


app.get('*', (req, res) => {
    res.send("This path does not exist.")
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})