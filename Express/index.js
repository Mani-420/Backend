const express = require('express')
const app = express()
const port = 3000

// app.use((req, res) => {
//     console.log('Mithu Gambler')
// })

app.use((req, res) => {
    console.log("Hello World")
    res.send('Hello Handsome')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})