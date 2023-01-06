const Post=require('../models/post');
module.exports.home=function(req,res){
    // Post.find({},function(err,posts)
    // {
    //     if(err)
    //     {
    //         console.log("Error occured while posting the comments");
    //         return;
    //     }
    //     return res.render('home',{
    //         title:"Home",
    //         comments:posts
    //     });
    // })

    Post.find({}).populate('user').populate({
      path:'comments',
      populate:{
        path:'user'
      }
    }).exec(function(err,posts){
      console.log("POSTS",posts);
      console.log("Post.comments",posts.comments);
          if(err)
          {
            console.log("Error occured while populating the data");
            return;
          }
          return res.render('home',{
            title:"Home",
            posts:posts
          })
    })
   
}