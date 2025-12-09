const express= require('express');
const myroute = express.Router();
const math_obj=require('./controller/MathController')

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

myroute.use('/multiple', (req,res)=>{
    if(req.method=="GET")
    {
        res.render('multiple')
    }
    else{
        let n1= req.body.a;
        let n2= req.body.b;
        let mul= parseInt(n1)*parseInt(n2);
        res.render('multi',{result:"Multiplication is "+mul})
    }
})

myroute.use('/circle',(req,res)=>{
    math_obj.area_of_circle(req,res);
})


module.exports=myroute;