const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<user>:<password>@cluster1.wlzyx.mongodb.net/vendas?retryWrites=true&w=majority').then(() => {
    console.log("Connected to DB!");
}).catch((err) => {
    console.log("Error: " + err);
})