const express = require("express")
    // Requiring the "express" package returns
    // a function that creates instance of
    // the express applications.

const logger = require("morgan")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");




const app = express();
// Set the View Engine
app.set("view engine", "ejs");

//LOGGER 
app.use(logger("dev:"));


// access bodyparsers
app.use(bodyParser.urlencoded({ extended: true }));

// Access cookies parsers
app.use(cookieParser());



app.get("/", (req, res) => {
    res.render("homepage");

});






const PORT = 5000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`The server is listening for requests at ${HOST}:${PORT}`);
});