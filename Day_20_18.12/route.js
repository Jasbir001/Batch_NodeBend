const express= require('express');
const myroute = express.Router();
const multer= require('multer');
const path = require('path');
const Apoint_Object = require('./Controller/AppointmentController');
const cont_obj = require('./Controller/ContactController');
const user_obj = require('./Controller/AuthenticateController')



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
myroute.use('/plogin',(req,res)=>{
    user_obj.checkAuth(req,res)
})
myroute.use('/paccount',(req,res)=>{
    user_obj.create_user(req,res)
})
myroute.use('/Patient_Dashboard',(req,res)=>{
    user_obj.Patients_dashboard(req,res)
})





module.exports=myroute;