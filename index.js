const express=require('express');
const app=express();
const port = 8000;
const expressLayout=require('express-ejs-layouts')
app.use(expressLayout);
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