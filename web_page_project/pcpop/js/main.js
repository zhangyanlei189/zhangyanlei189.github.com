//pcpop专题
function tab_zhuanti() {
    $(".tabs span").mouseover(function () {
        if ($(this).hasClass("active")) return false;
        var currCls = $(this).attr("class");
        $("."+currCls+"-cont").addClass("active").siblings().removeClass("active")
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".tab-cont li").mouseover(function () {
        $(this).addClass("act").siblings().removeClass("act");
    });
}


//轮播图
function slider(){
    var mySwiper = new Swiper ('.slide-box', {
        loop: true,
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
        pagination: '.pagination',
        paginationClickable: true,
    });
    $(".swiper-container").mouseover(function () {
        $(".swiper-btn",this).show();
        mySwiper.stopAutoplay();
    }).mouseout(function () {
        $(".swiper-btn",this).hide();
        mySwiper.startAutoplay();
    });
    $('.swiper-container .btnLeft').on('click', function(e){
        e.preventDefault()
        mySwiper.stopAutoplay();
        mySwiper.swipePrev();
        mySwiper.startAutoplay();
    })
    $('.swiper-container .btnRight').on('click', function(e){
        e.preventDefault()
        mySwiper.stopAutoplay();
        mySwiper.swipeNext();
        mySwiper.startAutoplay();
    })
}

function isShowToolbar(){
        $(window).scroll(function(){
            if($(document).scrollTop()>=50){
                $(".toolbar").show();
            }else {
                $(".toolbar").hide();
            }
        });
        $(".to-top").on("click",function () {
            $("html").animate({"scrollTop":0},300);
        });
}




$(function () {
    tab_zhuanti();
    slider();
    isShowToolbar();
})