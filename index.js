const express=require('express');
const app=express();
const port = 8000;




app.listen(port,function(error){
    if(error)
    {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Running on port : ${port}`);
})