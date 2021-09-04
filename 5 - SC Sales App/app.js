const express = require('express');
const mongoose = require('mongoose');
const credentials = require('./credentials.json');
const app = express();

mongoose.connect(credentials.db.mongoDB.host, { useNewUrlParser: true, useUnifiedTopology: true });

const Products = mongoose.model('products', {
    name: String,
    price: Number,
    code: String
});

app.set('view engine', 'ejs');
app.set('views', __dirname, '/views');
app.use(express.urlencoded());
app.use(express.json());

//Home page
app.get('/', (req, res) => {
    res.render('form_products');
});

//List all products (page)
app.get('/products', (req, res) => {
    Products.find({}, (err, element) => {
        if (err) return res.status(500).send('Erro ao consultar produtos');
        res.render('products', { items: element });
    });


});

app.get('/addProduct', (req, res) => {
    res.render('form_products');
});

app.post('/addProduct', (req, res) => {
    let product = new Products();
    product.name = req.body.name;
    product.price = req.body.price;
    product.code = req.body.code;

    product.save((err) => {
        if (err) return res.status(500).send('Erro ao cadastrar produto');
        return res.redirect('/products');
    })
})
app.get('/delete/:id', (req, res) => {
    id = req.params.id
    Products.deleteOne({ _id: id }, (err, result) => {
        console.log(result)
        if (err) return res.status(500).send("Erro ao consultar produto")
    })
    //Produtos.findByIdAndRemove(id).exec()
    res.redirect('/products')


})

app.listen(credentials.db.mongoDB.port, () => {
    console.log(`Server is running! (port ${credentials.db.mongoDB.port})`)
})