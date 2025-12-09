const express = require('express');
const router_info = require('./route');
const app = express();
const port=4000;

app.set('view engine', 'ejs')
app.use('/',router_info)

app.listen(port,()=>    
{
    console.log(`Click here http://localhost:${port}`)
})