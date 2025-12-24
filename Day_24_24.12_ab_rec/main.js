const express = require('express');
const router_info=require('./route');
const bodyparser=require('body-parser');
const session=require('express-session');
const urlsp=bodyparser.urlencoded({extended:false});
const app = express();
const port=1112
app.set('view engine', 'ejs');
app.use(urlsp);
app.use(session(
    {
        secret:'patient_email',
        resave:false,
        saveUninitialized:false,
        cookie:{
                maxAge:1000*60*2
        }
    }
))
app.use("/public",express.static(__dirname+'/public'));
app.use('/',router_info);
app.listen(port,()=>
{
    console.log(`click Here http://localhost:${port}`);
})