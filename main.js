$(function(){
    function setPageSize() {
        var viewHeight = $(window).height();
        $(".page").css("height", viewHeight);
    }
    $(window).resize(setPageSize);
    setPageSize();
    
    $("#next-btn").click(function(){
        var newTop = $("body").scrollTop() + $(window).height();
        $("body").scrollTop(newTop);
    });
});
