$(function(){
    //banner轮播
    var _winH=$(window).height();
    (function(){
        //设置banner图的高度
        if(_winH < 1080){
            $(".header-banner").height(_winH);
        }
        //设置join处的高度
        join()
    })();
    var header = new Swiper ('.header-banner', {
        mode: 'horizontal',
        loop: true,
        autoplay : 2000,
        freeMode : false,//slide滑动时只滑动一格，并自动贴合wrapper
        mousewheelControl : false,//滚动鼠标时切换轮播图
        autoplayDisableOnInteraction : false,
        pagination: '.pagination',
        paginationClickable: true
    });
    //城市
    var cities = new Swiper('.cities', {
        //pagination: '.swiper-pagination',
        /* slidesPerView: 4.5,
         freeMode : true,
         //paginationClickable: true,
         spaceBetween: 30,
         scrollbar: {
         container :'.swiper-scrollbar',
         hide: false,
         draggable: false
         }*/
        slidesPerView: 4.5,
        spaceBetween: 30
    });
    //carts
    var carts = new Swiper('.carts', {
        //pagination: '.swiper-pagination',
        slidesPerView: 2.2,
        freeMode : true,
        //paginationClickable: true,
        spaceBetween: 30
    });
    //join内容高度控制
    function join(){
        var _con=$(".join-con"),_joinH=_con.eq(0).css('height');
        _con.eq(1).css("height",_joinH);
        $(".join").css('height',parseFloat(_joinH) +200 +"px")
    }
    $(window).on('resize',function(){
        join();
        //控制cities高度
        var cityH=$(".cities .swiper-box img").height();
        $('.cities .swiper-slide').height(cityH);
        $('.cities .swiper-wrapper').height(cityH);
        $(".cities").css("maxHeight",cityH);
        //控制carts高度
        var cartsH=$(".carts-model3 img").height();
        $('.carts .swiper-wrapper').height(cartsH);
        $('.carts .swiper-slide').height(cartsH);
        $(".carts").css("maxHeight",cartsH);
    });
    $(".cities .swiper-box img").on("load",function(){
        var _hei=$(this).height();
        $(this).parents('.swiper-slide').height(_hei);
        $(this).parents('.swiper-wrapper').height(_hei);
        $(".cities").css("maxHeight",_hei);
        alert(1)
    });
    $(".carts-model3 img").on("load",function(){
        var _hei=$(this).height();
        $(this).parents('.swiper-wrapper').height(_hei);
        $(this).parents('.swiper-wrapper').find(".swiper-slide").height(_hei);
    })
});