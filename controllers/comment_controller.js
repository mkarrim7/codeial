const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports.create=async function(req,res){
    try{
    let post= await Post.findById(req.body.post);
        if(post)
        {
           
          let comment= await Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            })
            post.comments.push(comment);
            post.save();
                if(req.xhr)
                {
                    console.log("$$$$$$$$");
                    return res.status(200).json({
                        body:{
                            comment:comment
                        },
                        message:"Comment Created"
                    })
                }
               
                return res.redirect('/');
        }
    }
    catch(error)
    {
        console.log("Error",err);
        return;
    }
    
}
module.exports.destroy=function(req,res)
 {
    Comment.findById(req.params.id,function(error,comment)
    {

        if(comment.user==req.user.id)
        {
            var postId=comment.post
            comment.remove();
            Post.findByIdAndUpdate(postId,{ $pull:{comments:req.params.id}},function(error,post){
                return res.redirect('back');
            })
        }
        else{
        return res.redirect('back');
        }
    })
 }