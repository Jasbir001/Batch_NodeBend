const express= require('express');
const myroute = express.Router();
const math_obj=require('./controller/MathController')
const swap_obj=require('./controller/NetmaxController')
const studnet_obj=require('./controller/studentController')

myroute.get('/',(req,res)=>{
    res.render('home')
})

myroute.get('/about',(req,res)=>{
    res.render('about')
})



myroute.use('/findarea',(req,res)=>{
    math_obj.area_of_circle(req,res);
})

myroute.use('/swap',(req,res)=>{
        swap_obj.swap_number(req,res);
})

myroute.use('/student_add',(req,res)=>{
    studnet_obj.Add_student(req,res)
})

module.exports=myroute;