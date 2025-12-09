const express = require('express');
const router_info = require('./route');
const bodyParser = require('body-parser');
const bodyprs=bodyParser.urlencoded({ extended: false });
const app = express();
const port=4000;

app.set('view engine', 'ejs')
app.use(bodyprs);
app.use('/',router_info)
app.use("/public",express.static(__dirname+'/public'));



app.listen(port,()=>    
{
    console.log(`Click here http://localhost:${port}`)
})