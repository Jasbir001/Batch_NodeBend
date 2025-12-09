const express= require('express');
const myroute = express.Router();

myroute.get('/',(req,res)=>{
    res.render('Home')
})

myroute.get('/about',(req,res)=>{
    res.render('About')
})

myroute.get('/contact',(req,res)=>{
    res.render('Contact')
})

myroute.get('./page',(req,res)=>{
    res.render('page')
})
module.exports=myroute;