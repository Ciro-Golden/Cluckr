const express = require("express")
    // Requiring the "express" package returns
    // a function that creates instance of
    // the express applications.

const morgan = require("morgan")

var app = express()

app.use(morgan('combined'))

app.get('/', function(req, res) {
    res.send('Hello')
})

































// var app = express() 

// app.get('/', function(req, res) {
//     res.send('Hello World')
// })

// app.listen(3000)