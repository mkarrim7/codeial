const User=require('../models/userdetails');
module.exports.profile=function(req,res){
    return res.render('user',{
        title:"User"
    })
}

module.exports.loginPage=function(req,res){
    res.render('user_sign_in',{
      title:"Login Page"
    });
  }
  
 module.exports.signup=function(req,res){
    res.render('user_sign_up',{
        title:"SIGN UP"
    });
}
module.exports.create=function(req,res){
  if(req.body.password!=req.body.confirm_password)
  {
    return res.redirect('back');
  }
  User.findOne({email:req.body.email},function(error,user){
    if(error)
    {
      console.log("Error in finding user in signUp");
      return;
    }
    if(!user)
    {
      User.create(req.body,function(error,user)
      {
        if(error)
        {
          console.log("Error in creating the user while signing up");
          return;
        }
        return res.redirect('/users/signIn');

      })
    }
    else{
      return res.redirect('back');
    }
  })
}

module.exports.createSession=function(req,res)
{
  return res.redirect('/');
}