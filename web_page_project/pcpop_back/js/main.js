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


function resetLink(){
    $(".midd-cont a,.bott-cont a").on("click",function () {
        return false;
    });
}


function popup(){
    $(".swiper-slide a,.midd-cont a,.bott-cont a").on("click",function () {
        var id = $(this).prop("id");
        var iframe_u = id.split("_")[0] == "c1"?"form_focus":"form_common";
        layui.use(["layer","form"],function () {
            var layer = layui.layer;
            layer.open({
                type: 2,
                shade: [0.8,"#000"],
                title: "位置: "+id, //不显示标题
                area:["500px","460px"],
                content: './component/'+iframe_u+'.html?id='+id, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
                cancel: function(){
                    // layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
                }
            });
        });
    });
}

//设置焦点图
function setFocus(id,data){
    $("#"+id).attr("href",data.url).find("img").attr("src",data.pic).end().siblings("p").find("span").text(data.title);
}
//图文字链
function setPicText(id,data){
    var ids = id.split("_");
    var cid = id[0],pid =id[1];

    if (cid == "c2") {   //midd-left-bottom
        $("#"+id).attr("href",data.url).find("img").attr("src",data.pic).end().find("p").text(data.title);
    }else if (cid == "c3") {   //midd-center
        $("#"+id).attr("href",data.url).text(data.title);
    }else if (cid == "c4") {   //评测导购行情图文
        $("#"+id).attr("href",data.url).find("img").attr("src",data.pic);
        $("#"+id).find("p").text(data.title).siblings(".b").find(".fl").text(data.attr+" ⋅ "+data.author).end().find(".fr").text(data.publishtime)
    }else if (cid == "c5") {   //bott-left-two-img  评测导购行情
        $("#"+id).attr("href",data.url).find("img").attr("src",data.pic).end().find(".tit").text(data.title);
    }else if (cid == "c6") {   //评测导购行情文字链
        $("#"+id).attr("href",data.url).text(data.title).siblings("span").text(data.attr+" |");
    }else if (cid == "c7") {   //图赏
        $("#"+id).attr("href",data.url).find("img").attr("src",data.pic).end().find(".tushang-tit").text(data.title);
    }else if (cid == "c8" || cid == "c9" || cid == "c10" || cid == "c11" || cid == "c12") {    //频道列表
        if (pid == "p1" || pid == "P2") { //频道列表 图文   //todo 待设置图文信息
            $("#"+id).attr("href",data.url).find("img").attr("src",data.pic)
            $("#"+id).find("p").text(data.title).siblings(".b").find(".fl").text(data.attr+" ⋅ "+data.author).end().find(".fr").text(data.publishtime);
        }else { //频道列表  文字链
            $("#"+id).attr("href",data.url).text(data.title).siblings("span").text(data.attr+" |");
        }
    }else if (cid == "c13") {  //midd-top-right //todo 待设置
        $("#"+id).attr("href",data.url).text(data.title).closest("li").find(".classify").text(data.channelname).end().find(".time").text(data.publishtime);
    }else if(cid == "c14"){    //搜索
        $("#"+id).attr("href",data.url).text(data.title);
    }else if (cid == "c15" || cid == "c16" || cid == "c17") {    //专题
        $("#"+id).attr("href",data.url).find(".list-tit span").text(data.title);
        $("#"+id).find(".img-box img").attr("src",data.pic);
        $("#"+id).find("p").text(data.abstract).end().find(".b span").text(data.channelname+" ⋅ "+data.author)   //专题  todo 待设置
    }else if (cid == "c18") {  //5G专区
        $("#"+id).attr("href",data.url).find("img").attr("src",data.pic).end().find("p").text(data.title);
        if (pid != "p1") {
            $("#"+id).find(".b").text(data.channelname+" ⋅ "+data.author) //todo
        }
    }



}

$(function () {
    tab_zhuanti();
    slider();
    isShowToolbar();

    resetLink();//阻止链接
    popup();
})