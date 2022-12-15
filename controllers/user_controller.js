const User=require('../models/userdetails');
module.exports.profile=function(req,res){
    return res.render('user',{
        title:"User"
    })
}

module.exports.loginPage=function(req,res){
    res.render('loginPage',{
      title:"Login Page"
    });
  }
  
 module.exports.signup=function(req,res){
    res.render('signupPage',{
        title:"SIGN UP"
    });
}
module.exports.create=function(req,res){
    console.log("??????????",req.body);
    User.create(
       req.body
    ,function(error,newSchema){
       if(error)
        {
            console.log("Error occured while pushing the data to data base",error);
            return;
        } 
        console.log("*******",newSchema);
      });
    

}