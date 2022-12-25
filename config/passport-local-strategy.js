const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/userdetails');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
},function(email,password,done){
    User.findOne({email:email},function(err,user){
        if(err)
        {
            console.log("Error in finding the user --> Passport");
            return done(err);
        }
        if(!user||user.password!=password)
        {
           console.log("Invalid Username/Password");
           return done(null,false);
        }
        return done(null,user);
    })
}));

passport.serializeUser(function(user,done){
    done(null,user.id);
})

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user)
    {
        if(err)
        {
            console.log("Error in finding the user --> Passport");
            return done(err);
        }
        return done(null,user);
    })
})

//check if the user is authenticated
passport.checkauthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/signIn');
}
passport.setAuthenticatedUser=function(req,res,next)
{
  
  res.locals.user=req.user;
  console.log("response",res.locals.user);
   next();
}
module.exports=passport;