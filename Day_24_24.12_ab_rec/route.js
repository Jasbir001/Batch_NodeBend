const express = require('express'); 
const myroute=express.Router(); 
const multer = require('multer');
const path=require('path');
const Apoint_Object=require('./Controller/AppointmentController')
const cont_obj=require('./Controller/ContactController')
const user_obj=require('./Controller/AuthenticateController')
const admin_obj = require('./Controller/AdminController')


const Patient_image_storage = multer.diskStorage({
    destination:'./public/Patients_Photo/',
    filename:function(req,file,cb)
    {
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const Patient_upload = multer({storage: Patient_image_storage})


myroute.get('/',(req,res)=>
{
    res.render('Home')
})

myroute.get('/about',(req,res)=>
{
    res.render('About')
})

myroute.get('/contact',(req,res)=>
{
    res.render('Contact')
})

myroute.post('/bookapointment',(req,res)=>
{
    Apoint_Object.Add_Appointment(req, res)
})

myroute.use('/contact',(req,res)=>
{
   cont_obj.Enquire_Contact(req, res)
})

myroute.use('/plogin',(req,res)=>
{
    user_obj.checkAuth(req,res)
})

myroute.use('/paccount',(req,res)=>
{
    user_obj.create_user(req,res)
})

myroute.use('/Patient_Dashboard',(req,res)=>
{
    user_obj.Patients_dashboard(req,res)
})

myroute.use('/Patient_logout',(req,res)=>
{
    user_obj.Patients_Logout(req,res)
})
myroute.use('/Patient_settings',(req,res)=>
{
    user_obj.Patients_Setting(req,res)
})

myroute.use('/p_profile_complete',Patient_upload.single("userphoto"),(req,res)=>
{
    user_obj.Patients_Profile_Complete(req,res)
})

myroute.use('/Patient_Appointment',(req,res)=>
{
    Apoint_Object.get_records(req,res)
})
myroute.use('/Patient_Profile',(req,res)=>{
    user_obj.Patient_Profile(req,res)
})
myroute.use('/cpanel',(req,res)=>{
    admin_obj.Check_admin(req,res)
})
module.exports=myroute;