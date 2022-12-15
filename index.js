const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port = 8000;
const db=require('./config/mongoose');
const User=require('./models/userdetails');
app.use(express.urlencoded());

const expressLayout=require('express-ejs-layouts')
app.use(cookieParser());
app.use(express.static('./assets'))
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));


app.listen(port,function(error){
    if(error)
    {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Successfully Running on port : ${port}`);
})