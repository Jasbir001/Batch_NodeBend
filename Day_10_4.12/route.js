const express= require('express');
const myroute = express.Router();
const multer= require('multer');
const path = require('path');
const math_obj=require('./controller/MathController')
const swap_obj=require('./controller/NetmaxController')
const student_obj=require('./controller/studentController')
const employee_object= require('./controller/EmployeeController')


const emp_image_storage = multer.diskStorage({
    destination:'./public/emp_uploads/',
    filename:function(req,file,cb)
    {
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
 const emp_upload = multer({storage:emp_image_storage})






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
    student_obj.Add_student(req,res)
})

myroute.use('/student_display',(req,res)=>{
    student_obj.Display_Student(req,res)
})
myroute.use('/delete_student/:roll',(req,res)=>{
    student_obj.Delete_Student(req,res)
})
myroute.use('/update_student',(req,res)=>{
    student_obj.update_Student_record(req,res)
})
myroute.use('/add_employee', emp_upload.single('emp_photo'),(req,res)=>{
    employee_object.Add_employee(req,res)
})
myroute.use('/view_employee',(req,res)=>{
    employee_object.view_Employee(req,res)
})

module.exports=myroute;