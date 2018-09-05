//var app = angular.module('IT168', []);
var app = angular.module('IT168', ['Controllers', 'Directives']);
app.run(['$rootScope','$location', '$http',function ($rootScope,$location,$http) {
    $rootScope.banScroll = false;//页面是否滚动
    $rootScope.feedback = true; //回到顶部按钮显示隐藏
    $rootScope.page = 2;
    $rootScope.navAllShow = true;
    $rootScope.navToggleEvent = function(){
        $rootScope.banScroll = !$rootScope.banScroll;
        $rootScope.navAllShow = !$rootScope.navAllShow;
    }
    $rootScope.pageUrl = $location.protocol()+"://"+$location.host();

    $rootScope.getQueryString = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    };
}]);
app.filter("filterId", function () {
    return function (input) {
        if(input == -1){
            return
        }else {
            return "?id="+input
        }
    }
});
app.filter("filterTime", function () {
    return function (input) {
        var postTime = parseInt(input);
        var timestamp = parseInt(Date.parse(new Date()));
        var disTime = parseInt((timestamp - postTime)/1000/60);
        var postDate = (new Date(postTime).getMonth()+1)+"月"+new Date(postTime).getDate()+"日";
        if(disTime <60){
            if(disTime == 0){
                return "刚刚";
            }else {
                return disTime+"分钟前";
            }
        }else {
            if(disTime/60 <24 ){
                return parseInt(disTime / 60)+"小时前"
            }else {
                return postDate;
            }
        }
    }
})

angular.module('Directives', [])
    /*banner开始*/
    /*.directive('onFinishRender1', ['$timeout',function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('bannerEvent');
                    });
                }
            }
        };
    }])*/
    /*banner结束*/

    /*上拉加载更多开始*/
    .directive('whenScrolled', function () {//需要给页面的任一一个元素添加when-scrolled属性
        return function (scope, elm, attr) {
            // body窗口的滚动加载--需要Jquery
            var forbid = false;
            $(window).scroll(function () {
                //滚动条距离顶部的距离
                var scrollTop = $(window).scrollTop();
                //滚动条的高度
                var scrollHeight = $(document).height();
                //窗口的高度
                var windowHeight = $(window).height();
                if (scrollTop + windowHeight >= scrollHeight - 60) {
                    if (!forbid) {
                        scope.$apply(attr.whenScrolled);//页面加载完成后就会执行when-scrolled绑定的事件
                        forbid = true;
                        setTimeout(function () {
                            forbid = false;
                        }, 500)
                    }
                }
            });
        };
    })
    /*上拉加载更多结束*/

    /*分享开始*/
    .directive('whenScrolled', ['$rootScope',function ($rootScope) {//需要给页面的任一一个元素添加when-scrolled属性
        return function (scope, elm, attr) {
            $rootScope.shareDesc = "IT168是中国最大的个人和企业IT产品选购、互动网站,每日提供最新的IT产品报价、促销行情、手机、平板、笔记本、相机和企业等50个频道提供最专业的产品选购和使用建议。"
            shareEvent($rootScope.shareTitle,$rootScope.shareDesc,$rootScope.pageUrl+"/public/img/wxShare.jpg");
            //console.log($rootScope.pageUrl+"/public/img/wxShare.jpg");
        };
    }])
    /*分享结束*/

    /*滚动到第二屏事件开始--显示反馈按钮*/
    .directive('whenScrolled', ['$rootScope', function ($rootScope) {
        return {
            link: function (scope, elem, attrs) {
                var forbid = false;
                $(window).scroll(function () {
                    if (!forbid) {
                        var scrollTop = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scrollTop <= windowHeight) {
                            $rootScope.feedback = true;
                        } else {
                            $rootScope.feedback = false;
                        }
                        $rootScope.$apply();//将改变的数据重新布到页面上
                    }

                });
            }
        };
    }])
/*滚动到第二屏事件结束*/