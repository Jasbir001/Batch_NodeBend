const express= require('express');
const myroute = express.Router();
const multer= require('multer');
const path = require('path');
const Apoint_Object = require('./Controller/AppointmentController');
const cont_obj = require('./Controller/ContactController')



// const  _____________ =multer.diskStorage({
//     destination:'./public...path___________',
//     filename:function(req,file,cd)
//     {
//         createBrotliCompress(null,Date.now()+path.extname(file.originalname))
//     }
// })
// const emp_upload = multer({storage:____________________})



myroute.get('/',(req,res)=>{
    res.render('home')
})

myroute.get('/about',(req,res)=>{
    res.render('about')
})

myroute.post('/bookapointment',(req,res)=>{
    Apoint_Object.Add_appointment(req,res)
})

myroute.use('/contact',(req,res)=>{
    cont_obj.Enquire_Contact(req,res)
})


module.exports=myroute;