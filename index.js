const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port = 8000;
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passporLocal=require('./config/passport-local-strategy');
const User=require('./models/userdetails');
const MongoStore=require('connect-mongo');
const sassMiddleware=require('node-sass-middleware');
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
    
}))
app.use(express.urlencoded({extended:true}))
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
    },
    store: new MongoStore(
        {
            mongoUrl: 'mongodb://localhost/codeial_development',
            autoRemove: 'disabled'
        }, 
        function(err){
            console.log(err || 'connect - mongodb setup ok');
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/post',require('./routes/post'));
app.use('/comment',require('./routes/comment'));


app.listen(port,function(error){
    if(error)
    {
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Successfully Running on port : ${port}`);
})