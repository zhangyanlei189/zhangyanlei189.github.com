var method={
    //弹框
    msg_layer:function(tit,con){
        var _layer=$(".msg-layer");
        _layer.css("display","block");
        _layer.find("h5").html(tit);
        _layer.find($(".msg-con")).html(con);
        var winH=$(window).height(),winW=$(window).width(),_layerW=_layer.outerWidth(),_layerH=_layer.outerHeight();
        $(".msg-layer-bg").css({"display":"block"});
        _layer.css({"left":winW/2-_layerW/2,"top":winH/2-_layerH/2});
    },
    //关闭弹框
    msg_close:function(a){
    a.css({"display":"none"});
    },
    //弹出信息框，显示几秒后自动消失
    msg_fade:function(a,time){
        var msg_timer=null;
        a.fadeIn();
        msg_timer=window.setTimeout(function(){
            msg_timer=null;
            clearTimeout(msg_timer);
            a.fadeOut();
        },time)
    },
    //获取随机数
    getRandom:function(n,m){
        n=Number(n);
        m=Number(m);
        if(isNaN(n)||isNaN(m)){
            return Math.random();
        }
        if(n>m){
            var t=n;
            n=m;
            m=t;
        }
        return Math.round(Math.random()*(m-n)+n);
    },
    hasClass: function () {
        var cName = arguments[0], ele = arguments[1], reg = new RegExp("(?:^| +)" + cName + "(?: +|$)", "g");
        return reg.test(ele.className);
    },
    addClass: function () {
        var cName = arguments[0], ele = arguments[1];
        if (!this.hasClass(cName, ele)) {
            ele.className += " " + cName;
        }
    },
    removeClass: function () {
        var cName = arguments[0], ele = arguments[1], reg = new RegExp("(?:^| +)" + cName + "(?: +|$)", "g");
        if (this.hasClass(cName, ele)) {
            ele.className = ele.className.replace(reg, "");
        }
    },
    //通过className获取
    byClass:function (cName,context){
    context=context||document;
    if(context.getElementsByClassName){
        return context.getElementsByClassName(cName);
    }
    var ary=[];
    var allTag=context.getElementsByTagName("*");
    for(var i=0;i<allTag.length;i++){
        var cur=allTag.item(i);
        if(cur.className.indexOf(cName)>-1){
            ary.push(cur);
        }
    }
        return ary;
    },
    //选项卡
    tab:function(a,b,className){
        //a表示点击的按钮 一般传$(this)
        //b表示内容项   className表示active选项
        var index=a.index();
        a.addClass(className);
        a.siblings().removeClass(className);
        b.eq(index).addClass(className);
        b.eq(index).siblings().removeClass(className);
    },
    //当scrollTop大于100的时候，显示回到顶部按钮
    topBtn:function(a,time){
        if($(window).scrollTop()>100){
            a.fadeIn(time);
        }else{
            a.fadeOut(time);
        }
    },
    //回到顶部
    toTop:function(time){
        $("html,body").animate({scrollTop:0},time);
        return false;
    },
    //全选--全选按钮
    checkAll:function(a,b){
        //a表示除全选按钮以外的所有复选框
        //b表示全选复选框
        a.prop("checked",b.prop("checked"));
    },
    //全选--除全选按钮以外的所有复选框
    checkBtn:function(a,b){
        var $sel=a;
        var flag=true;
        for(var i=0;i<$sel.length;i++){
            if($sel[i].checked==false){
                flag=false;
                break;
            }
        }
        b.prop("checked",flag);
    },
    //锚点链接
    anchor:function(a,time){
        //a表示当前点击的按钮
        var href = a.attr("href");
        var pos = $(href).offset().top;
        $("html,body").animate({scrollTop:pos}, time);
        return false;
    },
    //当元素出现在可视区域时再显示
    show:function (obj,className){
        //此方法主要用于页面内容时显示时添加效果，此处就可以给元素添加left_move、right_move、top_move、bottom_move来实现四个方向的移动。如show($(".intro_leftM"),"left_move");
        $(function(){
            var clientH=document.documentElement.clientHeight||document.body.clientHeight;
            var scrollT=$(this).scrollTop();
            for(var i=0;i<obj.length;i++){
                var introH=$(obj[i]).height();
                if($(obj[i]).offset().top-scrollT+introH>0&&$(obj[i]).offset().top-scrollT<clientH){
                    $(obj[i]).addClass(className);
                }
            }
            $(document).on("scroll",function(){
                var scrollT=$(this).scrollTop();
                for(var i=0;i<obj.length;i++){
                    var conH=$(obj[i]).height();
                    if($(obj[i]).offset().top-scrollT+introH>0&&$(obj[i]).offset().top-scrollT<clientH){
                        $(obj[i]).addClass(className);
                    }
                }
            })
        })
    },
    img_lazyLoad:function(imgSrc){
        //此方法给需要延迟加载的图片添加class名lazy,data-original中存放img的真是路径，2.jpg表示默认显示的图片
        var $lazy=$("img.lazy");
        $lazy.attr("src",imgSrc);
        $lazy.each(function () {
            var clientH = $(window).height(),
                $height = $(this).height(),
                $scroll = $(window).scrollTop(),
                $off = $(this).offset().top,
                $val=$(this).attr("data-original");
            if ($off + $height - $scroll < clientH) {
                $(this).attr("src",$val);
            }
        })
    },
    //切换class
    toggleClass:function(a,className){
        a.addClass(className).siblings().removeClass(className);
    },
    notBlank:function(str) {
        //去除input框val值的空格
        var blank = /^\S*$/;
        return str.replace(/\s*/g, "");
    },
    matchEmail:function(str){
        //匹配邮箱
        var email=/^([\w\-])([\w\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5})$/;
        return email.test(str);
    },
    matchMobile:function(str){
        //匹配手机号
        var mobile=/^1[34578][0-9]{9}$/g;
        return mobile.test(str);
    },
    matchUser:function(str){
        //必须包含数字、小写字母、大写字母中至少两种  5-10位
        var user=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)[0-9A-Za-z]{5,10}$/;
        return user.test(str);
    },
    zero:function (s){
        //对于小于10的数字，再数字前边补0，一般用于格式化日期
        return s < 10 ? '0' + s: s;
    },
    keyDown:function (event,func) {
        //回车事件 func表示验证需要提交的表单没有问题的时候，需要执行的函数
        if (event.keyCode == 13) {
            func();
        }
    },
    roll:function(_outer,_speed,_time,_num,h){
        //无缝滚动效果
        // _outer表示外部容器，宽度最好是子元素宽度的整数倍
        // _speed表示每次移动的位移
        // _time表示每次移动所需时间
        // _num表示子元素的宽度或者高度
        //h为0的时候表示水平方向，其他任何值均为垂直方向
        var oUl=_outer.children().eq(0);
        var $html=oUl.html();
        $html+=$html;
        oUl.html($html);
        var oLi=oUl.children();
        if(h == 0){
            oUl.width(oLi.length * _num + 'px');
        }else{
            oUl.height(oLi.length * _num + 'px')
        }
        function move(){
            if(h == 0){
                if(oUl.position().left < -(oUl.width()/2)){
                    oUl.css({left:0});
                }
                if(oUl.position().left > 0){
                    oUl.css({left:-(oUl.width()/2) + 'px'});
                }
                oUl.css({left:oUl.position().left - _speed + 'px'})
            }else{
                if(oUl.position().top < -(oUl.height()/2)){
                    oUl.css({top:0});
                }
                if(oUl.position().top > 0){
                    oUl.css({top:-(oUl.height()/2) + 'px'});
                }
                oUl.css({top:oUl.position().top - _speed + 'px'})
            }
        }
        var timer=setInterval(move,_time);
        _outer.on("mouseout",function(){
            timer=setInterval(move,_time)
        });
        _outer.on("mouseover",function(){
            clearInterval(timer);
        });
    },
    getDate:function (a,b){
        //获取当前日期
        var dateStr="",
            nowT=new Date(),
            nowYear=nowT.getFullYear(),
            nowMonth=nowT.getMonth() + 1,
            nowDay=nowT.getDate(),
            nowHours=nowT.getHours(),
            nowMinites=nowT.getMinutes(),
            nowSeconds=nowT.getSeconds();
        dateStr= nowYear + a + nowMonth + a + nowDay + "    " + nowHours + b + nowMinites + b + nowSeconds;
    },
    showMenu:function(a,b,$this){
        //多级菜单方法
        //有ul子元素的li都有class名a
        //点击事件一般给clss名为a的直接子元素即ul的兄弟元素添加
        //点击的时候切换li的class名b，有class名b则显示其直接子元素ul
        if($this.parent(a).hasClass(b)){
            $this.parent(a).removeClass(b).find(a).removeClass(b)
        }else{
            $this.parent(a).addClass(b)
        }
    },
    countDown:function (date,ele,str) {
        //倒计时方法
        //date为截止日期，传入日期的时候年月日直接必须用/，否则IE不兼容
        //ele表示用于显示时间的元素，str表示毫秒差小于等于0时元素内显示的内容
        var timer;
        timer=window.setInterval(function () {
            var endTime = new Date(date),
                nowTime = new Date(),
                spanTime = endTime.getTime() - nowTime.getTime(),
                day = Math.floor(spanTime / (1000 * 60 * 60 * 24)),
                hours = Math.floor(spanTime / (1000 * 60 * 60)) % 24,
                minutes = Math.floor(spanTime / (1000 * 60)) % 60,
                 seconds = Math.floor(spanTime / 1000) % 60;
            if (day > 0 || hours > 0 || minutes > 0 || seconds > 0) {
                var strT = '<span class="timer" >' + method.zero(day) + '天' + method.zero(hours) + '小时' + method.zero(minutes) + '分' + method.zero(seconds) + '秒';
                ele.html(strT);
            } else {
                ele.html(str);
                clearInterval(timer);
            }
        }, 1000)
    },
    numberScroll:function (a,url,list){
        //数字滚动效果:一组数字从左至右依次滚落
        //每一个数字模块list用一个ul模块包裹，而包裹所有数字模块list的容器就是a
        //这种效果需要直接执行此函数  还需要给window绑个scroll事件
        var clientH = $(window).height(),
            $scroll = $(window).scrollTop(),
            $height = a.height(),
            $off = a.offset().top;
        if ($off + $height - $scroll >$height  && $off + $height - $scroll <= clientH) {
            $.post(url,function(data){
                var flag=32,data1=data.data,ary=data1.split("");
                if(ary.length == 1){
                    ary.unshift("0","0");
                }else if(ary.length == 2){
                    ary.unshift("0");
                }
                /* var ary1=Number(ary[0]),ary2=Number(ary[1]),ary3=Number(ary[2]),ary4=Number(ary[3]),ary5=Number(ary[4]);
                list.eq(0).animate({top:-ary1*flag+"px"},500);
                list.eq(1).delay(500).animate({top:-ary2*flag+"px"},500);
                list.eq(2).delay(800).animate({top:-ary3*flag+"px"},500);
                list.eq(3).delay(1000).animate({top:-ary4*flag+"px"},500);
                list.eq(4).delay(1000).animate({top:-ary5*flag+"px"},500);*/
                $.each(ary,function(i,item){
                    var aryI="ary"+i;
                    aryI=Number(ary[i]);
                    if(i==0){
                        list.eq(i).animate({top:-aryI*flag+"px"},500)
                    }else{
                        list.eq(i).delay(500 + i*300).animate({top:-aryI*flag+"px"},500)
                    }

                })
            });
        }else{
            list.stop(2000).css("top",0)
        }
    },
    versionRandom:function(){
        //给link和script添加随机的版本号
        $("link,script").each(function(){
            var t=Math.random().toFixed(4);
            if($(this).attr("src")){
                var $src=$(this).attr("src");
                $(this).attr("src",$src+"?v="+t)
            }else if($(this).attr("href")){
                var $href=$(this).attr("href");
                $(this).attr("href",$href+"?v="+t)
            }
        })
    },
    qqRoll:function (ele,time){
        //类似于qq的浮动框
        //ele用绝对定位定位在屏幕的最中间，left或right值自定义
        //需要给window绑定scroll事件实现动态效果
        var $win=$(window).height(),
            $scroll=$(document).scrollTop(),
            $height=ele.height();
        ele.animate({"top":$win/2+$scroll-$height/2},time)
    },
    noCopy:function(){
        //禁止密码框复制/剪切/粘贴
        $("input:password").on("copy cut paste", function (e) {
            return false;
        })
    },
    paraSwitch:function(para,className,num,more,contract,a){
        //显示段落中的一部分文字,其余用...代替
        //当点击段落中的更多按钮时，显示全部内容。否则为收缩。more表示更多  contract表示收缩
        //参数a表示是否有a标签  如果有的话则传0  没有的话传其他任何值均可
    var $text=para.find("p").html();
    var $text1=$text.substr(0,num)+"...";
    para.find("p").html($text1);
   if(a == 0){
       para.find("a").html(more);
       para.find("a").on("click",function(e){
           $(e.currentTarget).parent().toggleClass(className);
           if(para.hasClass(className)){
               para.find("p").html($text1);
               para.find("a").html(more);
           }else{
               para.find("p").html($text);
               para.find("a").html(contract);
           }
       })
   }
}
};
