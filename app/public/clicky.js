
<span><a class="like-Unlike" href="">Like</a></span> |
   function LikeUnLikeButton() {
       $(".like-Unlike").click(function(e) {
    if ($(this).html() == "Like") {
        $(this).html('Unlike');
    }
    else {
        $(this).html('Like');
    }
    return false;
});​
   }
       