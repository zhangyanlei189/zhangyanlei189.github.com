/**
 * Created by zhangyanlei on 2017/2/16.
 */
//遮罩层
function Mask(dom,callback1,callback2){
    var body = $("body");
    var mask = $("<div class='mask'></div>");
    var mskcont = $(dom);
    body.append(mask);
    body.append(mskcont);
    var focusipt = body.find("input:focus");
    if(focusipt.length){focusipt.blur();}
    body.addClass("over_hidden");
    mskcont.css("margin","-"+(mskcont.height()/2)+"px -"+(mskcont.width()/2)+"px");
    mskcont.hide().fadeIn(300);
    var times = mskcont.find(".title .close");
    times.click(close);
    //mask.click(function(){times.click();});
    mskcont.find(".nobtn").click(function(){times.click();});
    mskcont.find(".okbtn").click(function(){rttrue();});
    function close(){
        mask.remove();
        mskcont.remove();
        body.removeClass("over_hidden");
        if(callback1){callback1();}
        return false;
    }
    function rttrue(){
        mask.remove();
        mskcont.remove();
        body.removeClass("over_hidden");
        if(callback2){callback2();}
        return false;
    }
}
Mask.alert = function(str,callback,title){
    var title = title?title:"提示"
    var dom = "<div class=\"maskcontent\">"+
        "<div class=\"title\"><span>"+title+"</span><a class=\"close\">&times;</a></div>"+
        "<div class=\"cont\">"+str+"</div>"+
        "<div class=\"foot\"><input type=\"button\" class=\"yesbtn okbtn\" value=\"确定\"/></div>"+
        "</div>";
    Mask(dom,callback,callback);
};
Mask.confirm = function(str,callback1,callback2){
    var dom = "<div class=\"maskcontent\">"+
        "<div class=\"title\"><span>提示</span><a class=\"close\">&times;</a></div>"+
        "<div class=\"cont\">"+str+"</div>"+
        "<div class=\"foot\">"+
        "<input type=\"button\" class=\"yesbtn okbtn\" value=\"确定\"/>"+
        "<input type=\"button\" class=\"nobtn clbtn\" value=\"取消\"/>"+
        "</div>"+
        "</div>";
    Mask(dom,callback1,callback2);
};
Mask.load = function(url,title,callback,onload){
    $.get(url,{},function(data){
        if(!title){title="";}
        if(title == "notitle"){
            var dom = "<div class=\"maskcontent\"><div class=\"notitle\"><a class=\"close_btn\">&times;</a></div>"+data+"</div>";
        }else{
            var dom = "<div class=\"maskcontent\"><div class=\"title\"><span>"+title+"</span><a class=\"close\">&times;</a></div>"+data+"</div>";
        }
        Mask(dom,callback,false);
        if(onload){onload();}
    });
};
Mask.close = function(){
    var mask = $(".mask:last");
    var maskcontent = $(".maskcontent:last");
    if(mask&&mask.length){
        mask.remove();
        $("body").removeClass("over_hidden");
        if(maskcontent.find("iframe").length){maskcontent.find("iframe").remove();};
        if(window.CollectGarbage){CollectGarbage();};
        maskcontent.remove();
    }
}