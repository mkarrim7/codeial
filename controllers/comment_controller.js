const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports.create=function(req,res){
    Post.findById(req.body.post,function(error,post){
        if(error)
        {
            console.log("unable to post a comment");
            return;
        }
        if(post)
        {
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            },function(error,comment){
                console.log("comment",comment)
                post.comments.push(comment);
                post.save();
                return res.redirect('/');
            })
        }
    })
}