{
    //method to submit the data for new post using ajax
    let createPost=function()
    {
        let newPostForm=$('#new-post-form');

        newPostForm.submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'post',
                url:'/post/add-post',
                data:newPostForm.serialize(),
                success:function(data){
                    console.log("DATA",data);
                    let newPost=newPostDOM(data.data.post);
                    $('#post-list-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button',newPost));
                },error:function(error){
                    console.log(error.responseText);
                }
            })
        })
    }
    // method to create a post using DOM
    let newPostDOM = function(post){
        return $(`<li id="post-${post._id}">
           <a class="delete-post-button" href="/post/delete/${post._id}">X</a>   
          ${post.content}&nbsp; by &nbsp;${post.user.name}
         
         <div>
             <form action="/comment/add-comment" id="new-post-form" method="post">
                
                 <input type="text" name="content" placeholder="Type here to add a comment">
                 <input type="hidden" name="post" value="${post._id}">
                 <input type="submit" value="Add comment">
             </form> 
        </li>`);
    }

    let deletePost=function(deleteLink){
        console.log("DeleteLink",deleteLink);
         $(deleteLink).click(function(e)
        {
            
            e.preventDefault();
            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success:function(data){
                    $(`#post-${data.data.post_id}`).remove();
                },error:function(error){
                    console.log(error.responseText);
                }

            })
        })
    }
    createPost();
}