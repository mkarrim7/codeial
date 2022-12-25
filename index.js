const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port = 8000;
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passporLocal=require('./config/passport-local-strategy');
const User=require('./models/userdetails');
const sassMiddleware=require('node-sass-middleware');
// app.use(sassMiddleware({
//     src:'/assets/scss',
//     dest:'/assets/css',
//     debug:true,
    
// }))
app.use(express.urlencoded());

const expressLayout=require('express-ejs-layouts')
app.use(cookieParser());
app.use(express.static('./assets'))
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    name:'codeial',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*60)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));


app.listen(port,function(error){
    if(error)
    {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Successfully Running on port : ${port}`);
})