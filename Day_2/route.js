const express= require('express');
const myroute = express.Router();

myroute.get('/',(req,res)=>{
    res.render('Home')
})

myroute.get('/about',(req,res)=>{
    res.render('About')
})

module.exports=myroute;