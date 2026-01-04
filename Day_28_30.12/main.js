const express = require('express');
const app = express();
const router_info = require('./route');
const bodyParser = require('body-parser');
const session =require('express-session');
const urlsp=bodyParser.urlencoded({extended:false});
const port=8112;

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
app.use(session(
    {
        secret:'admin_user',
        resave:false,
        saveUninitialized:false,
        cookie:{
                maxAge:1000*60*5
        }
    }
))
app.use(session(
    {
        secret:'patient_appointment_counter',
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:1000*60*5 
        }
    }
))
app.use('/',router_info);
app.use("/public",express.static(__dirname+'/public'));

app.listen(port,()=>    
{
    console.log(`Click here http://localhost:${port}`)
})
