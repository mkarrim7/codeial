{
    let createComment=function()
    {
       let newComment=$('#new-comment-form')
       newComment.submit(function(e){
        e.preventDefault();
        $.ajax({
            type:'post',
            url:'/comment/add-comment',
            data: newComment.serialize(),
            success:function(data)
            {
                console.log("CommentData",data);
                let newComment=newCommentDOM(data.data.comment);
                console.log("Hello!!!");
                $('#comment-container>ul').prepend(newComment);
            },error:function(error){
                console.log(error.responseText);
            }
        });
       })
    }
      let newCommentDOM = function(comment)
      {
        return $(`<li>
        
            <a href="/comment/delete/${comment.id}">X</a>   
        <p>
         ${comment.content}
        <br>
        ${comment.user}
        </p> 
        </li>`)
      }
    createComment();
}