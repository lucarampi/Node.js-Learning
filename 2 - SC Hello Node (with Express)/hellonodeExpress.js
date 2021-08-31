const express = require("express");// imports express module
const app = express()
const port = 8000 //define the port we will use

app.get('/', (req, res) => {
    res.end("Hello Node.js + Express!")
});

app.listen(port, () => {
    console.log(`Server is running and is using Express module! (port ${port})`)
});