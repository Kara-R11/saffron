//Why coose us part

$(".headexplain-text").hide();

$(".headexplain-header").click(function() {
    $(".headexplain-text").slideToggle();
});

// blog part
$(".blog-posts").slice(2).hide();

$(".allpost-btn").click(function() {
    $(".blog-posts").slice(2).fadeIn();
});

//header

$(".listtag-link").click(function() {
    alert($(this).text() + " was clicked");
})