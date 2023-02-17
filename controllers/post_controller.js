const Post=require('../models/post');
const Comment=require('../models/comment');
const { post } = require('../routes');
module.exports.createPost=async function(req,res){
    try{
        let userPost = await Post.create({
         content:req.body.content,
         user:req.user._id
        })
        userPost=await userPost.populate('user');
        if(req.xhr)
        {
           return res.status(200).json({
             data:{
                post:userPost
             },
             message:"Post Created"
           })
        }
        return res.redirect('back');
       }catch(err){
        console.log("Error",err);
        return;
       }
    }
 module.exports.destroy=async function(req,res)
 {
    try{
      let post = await Post.findById(req.params.id);
        if(post.user==req.user.id)
        {
            post.remove();
            await Comment.deleteMany({post:req.params.id});
        }
        
        if(req.xhr)
        {
        
         return res.status(200).json({
            data:{
               post_id:req.params.id
            },
            message:"Post Deleted"
         })
        }
        return res.redirect('back');
    }catch(err){
        console.log('RRR',err);
        return
    }
   
 }