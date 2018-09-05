angular.module('Controllers', [])
    /*顶部导航部分*/
    .controller('navCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.navAllShow = true;
        $rootScope.banScroll = false;
        $scope.navMoreUp = false;
        $scope.index = 0;
        $scope.navs = [
            {link: "index.html", text: "最新"},
            {link: "channel-index-1.html", text: "手机"},
            {link: "channel-index-8.html", text: "笔记本"},
            {link: "channel-index-6.html", text: "家电"},
            {link: "channel-index-2.html", text: "相机"},
            {link: "channel-index-5.html", text: "数码"},
            {link: "channel-index-7.html", text: "音频"},
            {link: "channel-index-10.html", text: "DIY"},
            {link: "channel-index-3.html", text: "台式机"},
            {link: "channel-index-11.html", text: "显示器"},
            {link: "channel-index-4.html", text: "键盘鼠标"},
            {link: "channel-index-9.html", text: "移动存储"},
            {link: "channel-index-12.html", text: "企业IT"},
            {link: "channel-index-13.html", text: "汽车"}
        ];
        $scope.navEvent = function () {
            $rootScope.banScroll = !$rootScope.banScroll;
            $scope.navAllShow = !$scope.navAllShow;
            $scope.navMoreUp = !$scope.navMoreUp;
        };

    }])
    /*banner部分*/
    /*.controller('bannerCtrl', ['$scope', '$http', '$interval', '$rootScope', function ($scope, $http, $interval, $rootScope) {
        $scope.slides = [
            {
                "link": "detailText.html",
                "imgSrc": "http://s.u7u9.com/images/1/0/10b99f5dac7698fffcc24fce5fde8181.jpg",
                "text": "侠客风云传前传》DLC“幽冥路”实机演示曝光 年轻阎罗亮相",
                "href": "m.it168.com"
            },
            {
                "link": "detailText.html",
                "imgSrc": "http://s.u7u9.com/images/b/c/bc15027c21ae501105e50c10f4c3d991.jpg",
                "text": "侠客风云传前传》DLC“幽冥路”实机演示曝光 年轻阎罗亮相"
            },
            {
                "link": "detailText.html",
                "imgSrc": "http://s.u7u9.com/images/9/2/927315be0091cc66b5a7b7b4b09fd988.png",
                "text": "侠客风云传前传》DLC“幽冥路”实机演示曝光 年轻阎罗亮相"
            },
            {
                "link": "detailText.html",
                "imgSrc": "http://s.u7u9.com/images/b/1/b1d00bd609b2fffac15b148498d4ef1f.png",
                "text": "侠客风云传前传》DLC“幽冥路”实机演示曝光 年轻阎罗亮相"
            }
        ]; //banner 数据
        $scope.$on('bannerEvent', function (ngRepeatFinishedEvent) {
            var swiper = new Swiper('.swiper-container', {
                loop: true,
                spaceBetween: 30,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });
        $http.jsonp("http://topic.it168.com/game/computex1805/HandlerData.ashx?jsoncallback=JSON_CALLBACK&ajax=all&type=2&_=1531278064705")
            .success(
                function(data, status, header, config){
                    $interval(function () {
                        $scope.countEvent();
                    }, 1000, $scope.count)
                    /!*倒计时结束关闭广告*!/
                    $scope.countEvent = function () {
                        $scope.count--;
                        if ($scope.count == 0) {
                            $scope.adShow = false;
                            $rootScope.banScroll = false;
                        }
                    }
                    /!*点击关闭广告*!/
                    $scope.closeEvent = function () {
                        $scope.adShow = false;
                        $rootScope.banScroll = false;
                    }

                }
            );
    }])*/
    /*资讯列表部分*/
    .controller('listCtrl', ['$scope', '$http', '$timeout', '$rootScope', function ($scope, $http, $timeout, $rootScope) {
        /*分享的标题与描述*/
        $rootScope.shareTitle = "IT168";
        //$rootScope.shareDesc = "IT168是中国最大的个人和企业IT产品选购、互动网站,每日提供最新的IT产品报价、促销行情、手机、平板、笔记本、相机和企业等50个频道提供最专业的产品选购和使用建议。";
        /*请求资讯列表开始*/
/*        $http({
            method: 'get',
            url: 'datas/list.json',
            params: {
                page: 1
            },
            //data: 'page='+page+"&classify="+$rootScope.channelClass,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })*/

        $http.jsonp("http://api.cms.it168.com/api/it168/datas/list?jsoncallback=JSON_CALLBACK&page=1&id=0&type=0")
            .success(function(data,status,headers,config){
                console.log(data);
            if(!data.code){
                window.location.href = "404.html"
            }else {
                $rootScope.items = data.data;
            }

        });


        /*请求资讯列表结束*/

        $scope.isLoading = false;
        $scope.navHideEvent = function () {
            $rootScope.navAllShow = true;
        }
        var page = 2;
        /*回滚到页面顶部事件*/
        $scope.backTop = function () {
            angular.element('html,body').animate({scrollTop: 0}, 300);
        }
        /*加载更多开始*/
        var loadFlag = 1;
        var isFlag = true;
        if(loadFlag) {
            $scope.loadMoreLine = function () {
                $scope.isLoading = false;
                /*get请求*/
                if (loadFlag) {
                    if(!isFlag) {
                        return;
                    }else {
                        isFlag = false;
                    };
                    $http.jsonp("http://api.cms.it168.com/api/it168/datas/list?jsoncallback=JSON_CALLBACK&page="+page+"&id=0&type=0").success(function (data, status, headers, config) {
                        isFlag = true;
                        if (!data.code) {
                            loadFlag = data.code;
                            $(".IT-loading").html("没有更多了")
                            return;
                        }
                        page++;
                        $timeout(function () {
                            $scope.isLoading = true;
                            $scope.items = $scope.items.concat(data.data);//data.data是列表的数据

                            /*添加广告开始*/
                            /*LG('ADV_21654');
                            if (typeof xarr != 'undefined') {
                                f1 = xarr[0];
                                data.data.splice(4, 0, {
                                    "$$hashKey": "object:44444",
                                    "class": f1.c,
                                    "classify": "",
                                    "classifyText": "",
                                    "id": "3193154",
                                    "imgSrc": wimurl + f1.cpicaddress,
                                    "link": f1.cUrl,
                                    "text": f1.ctxtContent,
                                    "time": Date.parse(new Date()),
                                    "totalNum": 0,
                                    "filterTime": "广告"
                                });
                            }*/
                            /*添加广告结束*/
                        }, 500, true);
                    }).error(function () {
                        //alert("请求出错")
                    });
                };
            }
        }
        /*加载更多结束*/
    }])