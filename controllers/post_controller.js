const Post=require('../models/post');
module.exports.createPost=function(req,res){
    Post.create({
     content:req.body.content,
     user:req.user._id
    },function(err,userPost)
    {
     if(err)
     {
     console.log("Error in posting the comments");
     return;
     }
     return res.redirect('back');
    })
 }