$(function(){
    //首页轮播图
    var header = new Swiper ('.header-banner', {
        mode: 'horizontal',
        loop: true,
        autoplay : 3000,
        freeMode : false,//slide滑动时只滑动一格，并自动贴合wrapper
        mousewheelControl : false,//滚动鼠标时切换轮播图
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true,
        //onSlideChangeStart:function(swiper){
        /*onSlideChangeStart:function(swiper){
            var str='<span></span>',_btn=$(".swiper-pagination-bullet");
            _btn.html(str);
            _btn.each(function(){
                if($(this).hasClass('swiper-pagination-bullet-active')){
                    $(this).find('span').animate({"width":"100%"},3000);
                }
            });
        }*/
    });
    //首页 常见问题 收起及展开答案
    $('.problem li').on("click",function () {
        $(this).toggleClass('act')
    });
    //换屏  tab切换
    $('.panel-tab-btn li').on("click",function () {
        $(this).addClass('act').siblings().removeClass('act')
    })
});