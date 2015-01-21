$(function(){
    function setPageSize() {
        var viewHeight = $(window).height();
        $(".page").css("height", viewHeight);
    }
    
    function highlightActiveNavLink(top) {
        $(".nav-boxes > li").removeClass("active-box");
        var pageNo = Math.floor(top / $(window).height());
        if (pageNo > 2) pageNo = 2;
        if (pageNo > 0) {
            $(".nav-boxes > li:nth-child(" + pageNo + ")").addClass("active-box");
        }
    }
    
    function smoothScroll(top) {
        $("html, body").animate({ scrollTop: top }, {
            duration: 1000,
            complete: function() {
                highlightActiveNavLink(top);
            }
        });
    }
    
    $(window).scroll(function() {
        highlightActiveNavLink($("body").scrollTop());
    });
    
    $(".nav-boxes > li > a").click(function(e){
        e.preventDefault();
        
        var $target = $(this.hash);
        smoothScroll($target.offset().top);
    });
    
    $("#next-btn").click(function(){
        var newTop = $("body").scrollTop() + $(window).height() + 18;
        smoothScroll(newTop);
    });
    
    $(window).resize(setPageSize);
    setPageSize();
});
