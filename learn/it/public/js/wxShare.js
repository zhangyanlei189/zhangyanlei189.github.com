function shareEvent(val1, val2, val3) {
    var oUrl = window.location.href;
    //console.log(oUrl);
    var descContent = val2; //分享描述
    var shareTitle = val1; //分享标题
    var imgUrl = val3;//分享图片链接

    //if ($('.IT168Detail .content img').length) {
    //    imgUrl = $('.IT168Detail .content img').attr('src');
    //}else{
    //    imgUrl = "../img/share/wxShare.jpg";
    //}

    //console.log(shareTitle);
    //console.log(imgUrl);
    //console.log(descContent);
    //console.log();
    var oul = window.location.host;//当前.com
    /*QQ、微博分享配置开始*/
    if($(".IT168Detail").length){
        window._bd_share_config = {
            /*QQ分享只有放到服务器上才能显示标题和内容*/
            "common": {
                "bdSnsKey": {},
                "bdText": shareTitle,
                "bdDesc": descContent,
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": imgUrl,
                "bdStyle": "0",
                "bdSize": "32"
            }, "share": {"bdSize": 16}
        };
        with (document)
            0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
    }

    /*QQ、微博分享配置结束*/

    $.ajax({
        url: "http://api.cms.it168.com/api/it168/wxshare",
        //url: "http://" + window.location.host + "/handler/datas.ashx?action=ticket&url=" + oUrl,
        data: {url: document.location.href},
        type: 'get',
        dataType:'jsonp',
        jsonp:"jsoncallback",
        success: function (data) {
            console.log(data);
            console.log("请求成功");
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名，见附录1
                jsApiList: [
                    'openLocation',
                    'getLocation',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareQZone',
                    'onMenuShareWeibo'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.error(function (res) {
                //alert(res);
                console.log("配置失败")
            });
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;
            if (isWeixin) {
                wx.ready(function () {
                    // 微信分享到朋友圈
                    wx.onMenuShareTimeline({
                        title: shareTitle, // 分享标题
                        link: oUrl, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            $('.wx-share').hide();
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });

                    // 微信分享给朋友
                    wx.onMenuShareAppMessage({
                        title: shareTitle, // 分享标题
                        desc: descContent, // 分享描述
                        link: oUrl, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            $('.wx-share').hide();
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });

                    // 微信分享到QQ
                    wx.onMenuShareQQ({
                        title: shareTitle, // 分享标题
                        desc: descContent, // 分享描述
                        link: oUrl, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            $('.wx-share').hide();
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });

                    // 分享到腾讯微博
                    wx.onMenuShareWeibo({
                        title: shareTitle, // 分享标题
                        desc: descContent, // 分享描述
                        link: oUrl, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            $('.share-wrap').hide();
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });

                    // 分享到QQ空间
                    wx.onMenuShareQZone({
                        title: shareTitle, // 分享标题
                        desc: descContent, // 分享描述
                        link: oUrl, // 分享链接
                        imgUrl: imgUrl, // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                });
            }
            ;
        },
        error: function () {
            alert("请求失败")
        }
    })

    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    $(".headerDetail .share,.header .share").click(function () {
        if (isWeixin) {
            $(".wx-share-img").show();
            console.log(1);
        } else {
            $(".IT-share").show();
        }

        wxShare();
    });
    $(".IT-share").on("click", function (e) {
        e.stopPropagation();
        $(".share-wrap").show();
    });

}
//GoShare();
function wxShare() {
    $('.share-wrap,.share-wrap .close').click(function (e) {
        e.stopPropagation();
        $('.share-wrap').hide();
    });
}