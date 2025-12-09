const express = require('express');
const router_info = require('./route');
const app = express();
const port=4000;

app.set('view engine', 'ejs')
app.use('/',router_info)
app.use("/public",express.static(__dirname+'/public'));
app.use("/views",express.static(__dirname+'/views'));

app.listen(port,()=>    
{
    console.log(`Click here http://localhost:${port}`)
})