const express = require('express')
const app = express()
const port = 8000

// app.use() ------------------------------------

// app.use((req, res) => {
//     console.log("Hello World")
//     res.send('Hello Handsome')
// })


// app.get() ------------------------------------
// app.get('/', (req, res) => {
    //     res.send("You contacted Home path.")
// })

// app.get('/contact', (req, res) => {
    //     res.send("You contacted contact path.")
    // })
    
    // app.get('/about', (req, res) => {
        //     res.send("You contacted about path.")
        // })
        
        
// app.post() ------------------------------------
// app.post('/', (req, res) => {
    //     res.send("You contacted post root.")
// })


// app.get('*', (req, res) => {
    //     res.send("This path does not exist.")
    // })
    

// Request parameters ------------------------------------  
// app.get('/:username/:id', (req, res) => {
//     let {username, id} = req.params
//     // console.log(username)
//     res.send(`You contacted ${username} path.`)
// })

app.get('/:username', (req, res) => {
        let {username} = req.params
    // console.log(username)
    res.send(`You contacted ${username} path.`)
})


// Request parameters ------------------------------------  
app.get('/search', (req, res) => {
    console.log(req.query);
    res.send(`no results`);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})