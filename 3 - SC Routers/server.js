const express = require("express");// imports express module
const app = express()
const port = 8000 //define the port we will use
const router = require('./router')

app.use('/',router);

app.listen(port, () => {
    console.log(`Server is running and is using Express module! (port ${port})`)
});