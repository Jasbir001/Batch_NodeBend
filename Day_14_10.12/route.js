const express= require('express');
const myroute = express.Router();
const multer= require('multer');
const path = require('path');



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



module.exports=myroute;