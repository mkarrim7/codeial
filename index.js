const express=require('express');
const app=express();
const port = 8000;

app.use('/',require('./routes'));


app.listen(port,function(error){
    if(error)
    {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Successfully Running on port : ${port}`);
})