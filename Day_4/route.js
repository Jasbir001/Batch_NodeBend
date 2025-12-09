const express= require('express');
const myroute = express.Router();

myroute.get('/',(req,res)=>{
    res.render('home')
})

myroute.get('/about',(req,res)=>{
    res.render('about')
})

myroute.get('/contact', (req, res)=>{
    res.render('contact')
})
myroute.get('/page', (req,res)=>{
    res.render('page')
})
myroute.get('/calculate',(req,res)=>
{
    res.render('sum')
})

myroute.post('/add_sum', (req, res)=>{
    let n1 = req.body.a;
    let n2 = req.body.b;
    let sum = parseInt(n1) + parseInt(n2);
    res.render('sum',{result :'Sum is= '+sum})
})
module.exports=myroute;