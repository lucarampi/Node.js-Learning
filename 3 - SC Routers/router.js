const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("Home");
});

router.get('/cadastro',(req,res)=>{
    res.send('Página de cadastro');
});

router.get('/',(req,res)=>{
    res.send('Login');
});

module.exports=router;