const User=require('../models/userdetails');


module.exports.profile=function(req,res){
    User.findById(req.params.id,function(error,user){
      if(error)
      {
        console.log("Error occured while entering to the profile page");
        return res.redirect('back');
      }
      console.log("ProfileUser",user);
      return res.render('user',{
        title:"User",
        profile_user:user
    })
    })
    
}
module.exports.update=function(req,res){
  User.findByIdAndUpdate(req.user.id,req.body,function(error,user)
  {
    if(error)
    {
    return res.status(401).send('unauthorized');
    }else{
      return res.redirect('back');
    }
  })
}

module.exports.loginPage=function(req,res){
  if(req.isAuthenticated())
  {
    return res.redirect('/users/profile');
  }
    return res.render('user_sign_in',{
      title:"Login Page"
    });
  }
  
 module.exports.signup=function(req,res){
  if(req.isAuthenticated())
  {
    return res.redirect('/users/profile');
  }
   return res.render('user_sign_up',{
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

module.exports.destroySession= function(req, res){
  req.logout( function(err){
    if(err){
      console.log(err);
      return;
    }
    return res.redirect("/");
  });
}

