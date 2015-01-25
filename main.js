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
    
    $("#next-btn").click(function() {
        var newTop = $("body").scrollTop() + $(window).height() + 18;
        smoothScroll(newTop);
    });
    
    $(".portfolio-toggle").click(function() {
        var id = $(this).attr("id");
        var $oldChecked = $(".portfolio-toggle.checked");
        var oldId = $oldChecked.attr("id");
        
        if ($oldChecked.length === 0) {
            $(this).addClass("checked");
            $(this).attr("aria-checked", "true");
            
            $("#" + id + "-work").fadeIn(1000);
            setTimeout(function() { $("#" + id + "-desc").fadeIn(1200) }, 800);
        } else if (id != $oldChecked.attr("id")) {
            $oldChecked.removeClass("checked");
            $(this).addClass("checked");
            
            $oldChecked.attr("aria-checked", "false");
            $(this).attr("aria-checked", "true");
            
            $("#" + oldId + "-work").hide(function(){
                $("#" + id + "-work").fadeIn(1200);
            });
            $("#" + oldId + "-desc").hide(function(){
                setTimeout(function() { $("#" + id + "-desc").fadeIn(1500) }, 1000);
            });
        }
    });
    
    $(window).resize(setPageSize);
    setPageSize();
});
