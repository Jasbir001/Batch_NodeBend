const express= require('express');
const myroute = express.Router();
const math_obj=require('./controller/MathController')
const swap_obj=require('./controller/NetmaxController')
const emp_obj=require('./controller/EmployeeController')

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
    if(req.method=="POST")
    {
        res.render('multiply')
    }
    else{
        let n1= req.body.a;
        let n2= req.body.b;
        let mul= parseInt(n1)*parseInt(n2);
        res.render('multiply',{result:"Multiplication is "+mul})
    }
})

myroute.use('/circle',(req,res)=>{
    math_obj.area_of_circle(req,res);
})

myroute.use('/swap',(req,res)=>{
        swap_obj.swap_number(req,res);
})
myroute.use('/add_emp',(req,res)=>{
    emp_obj.Add_Employee(req,res);
})

module.exports=myroute;