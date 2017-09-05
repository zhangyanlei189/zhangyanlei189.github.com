//遮罩层
function layer(dom,callback1,callback2){
    var body = $("body");
    var mask = $("<div class='mask'></div>");
    var mskCont = $(dom);
    body.append(mask);
    body.append(mskCont);
    var focusipt = body.find("input:focus");
    if(focusipt.length){focusipt.blur();}
    body.addClass("over_hidden");
    mskCont.css("margin","-"+(mskCont.height()/2)+"px -"+(mskCont.width()/2)+"px");
    mskCont.hide().fadeIn(300);
    var times = mskCont.find(".title .close");
    times.click(close);
    mskCont.find(".layerCancel").click(function(){times.click();});
    mskCont.find(".layerConfirm").click(function(){sucCallBack();});
    function close(){
        var timer=null;
        mskCont.removeClass('showAlert').addClass("hideAlert");
        timer=setTimeout(function(){
            clearTimeout(timer);
            mask.remove();
            mskCont.remove();
            body.removeClass("over_hidden");
            if(callback1){callback1();}
            return false;
        },200);
    }
    function sucCallBack(){
       /* var timer=null;
        mskCont.removeClass('showAlert').addClass("hideAlert");
        timer=setTimeout(function(){
            clearTimeout(timer);
            mask.remove();
            mskCont.remove();
            body.removeClass("over_hidden");
            if(callback2){callback2();}
            return false;
        },200);*/
        if(callback2){callback2();}
        return false;
    }
}
layer.alert = function(str,type,callback,title){
    var tit = title?title:"提示";
    var dom = "<div class=\"layerContent showAlert\" data-animation='"+type+"'>"+
        "<div class=\"title\"><span>"+tit+"</span><a class=\"close\">&times;</a></div>"+
        "<div class=\"cont\">"+str+"</div>"+
        "<div class=\"layerFoot\"><input type=\"button\" class=\"layerConfirm\" value=\"确定\"/></div>"+
        "</div>";
    layer(dom,callback,callback);
};
layer.confirm = function(str,type,callback1,callback2){
    var dom = "<div class=\"layerContent showAlert\" data-animation='"+type+"'>"+
        "<div class=\"title\"><span>提示</span><a class=\"close\">&times;</a></div>"+
        "<div class=\"cont\">"+str+"</div>"+
        "<div class=\"layerFoot\">"+
        "<input type=\"button\" class=\"layerConfirm\" value=\"确定\"/>"+
        "<input type=\"button\" class=\"layerCancel\" value=\"取消\"/>"+
        "</div>"+
        "</div>";
    layer(dom,callback1,callback2);
};
layer.load = function(url,type,title,callback,onload){
    $.get(url,{},function(data){
        if(!title){title="";}
        var dom;
        if(title == "noTitle"){
            dom = "<div class=\"layerContent showAlert\" data-animation='"+type+"'><div class=\"noTitle\"><a class=\"close_btn\">&times;</a></div>"+data+"</div>";
        }else{
            dom = "<div class=\"layerContent showAlert\" data-animation='"+type+"'><div class=\"title\"><span>"+title+"</span><a class=\"close\">&times;</a></div>"+data+"</div>";
        }
        layer(dom,callback,false);
        $(".close_btn").on("click",function(){
            layer.close();
        });
        if(onload){onload();}
    });
};
layer.close = function(){
    var timer1=null;
    var mask = $(".mask:last");
    var layerContent = $(".layerContent:last");
    layerContent.removeClass('showAlert').addClass("hideAlert");
    timer1=window.setTimeout(function(){
        clearTimeout(timer1);
        if(mask&&mask.length){
            mask.remove();
            $("body").removeClass("over_hidden");
            if(layerContent.find("iframe").length){layerContent.find("iframe").remove();}
            if(window.CollectGarbage){CollectGarbage();}
            layerContent.remove();
        }
    },200);
};