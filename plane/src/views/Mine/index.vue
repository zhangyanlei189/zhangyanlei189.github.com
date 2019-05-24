<template>
    <div class="main">
        <div class="content">
            <div class="top"></div>
            <div class="personal">
                <div class="avater-box"><img src="" alt=""></div>
                <div class="nick-box">高高高</div>
            </div>
            <div class="goods-box">
                <div class="card">
                    <div class="tit">我的积分 <span class="fen-icon"></span></div>
                    <div class="num">800</div>
                </div>
                <div class="card">
                    <div class="tit">待领取</div>
                    <div class="num">600</div>
                </div>
            </div>
            <router-link tag="div" to="/order/2" class="link clearfix">
                <div class="left fl"><span class="icon dingdan"></span> 全部订单</div>
                <div class="right fr"><i class="mint-cell-allow-right"></i></div>
            </router-link>
            <router-link tag="div" to="/order/1" class="link clearfix">
                <div class="left fl"><span class="icon chuxingdingdan"></span> 待出行订单</div>
                <div class="right fr"><i class="mint-cell-allow-right"></i></div>
            </router-link>
            <div class="serch-history">
                <div class="tit clearfix">
                    <div class="fl">形成搜索记录</div>
                    <div class="fr">清除记录</div>
                </div>
                <div class="his-list clearfix">
                    <div class="fl"><span>北京</span><span class="icon go-icon"></span><span>吉隆坡</span></div>
                    <div class="fr">04月21号</div>
                </div>
                <div class="his-list clearfix">
                    <div class="fl"><span>北京</span><span class="icon go-icon"></span><span>纽约</span></div>
                    <div class="fr">04月21号</div>
                </div>
            </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import TabBar from '@/components/TabBar'
    export default {
        name:'Movie',
        components:{
            TabBar,
        }
    }
</script>

<style scoped lang="less">
    .bg-image(@url) {
        background-image: url('/images/@{url}@2x.png');
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('/images/@{url}@3x.png');
        }
    }
    .icon-image(@url) {
        background-repeat: no-repeat;
        background-image: url('../../assets/images/@{url}@2x.png');
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('../../assets/images/@{url}@3x.png');
        }
    }
    .main{
        width: 100%;
        height: 100%;
        background-color: #fff;
        background-size: 100%  1.96rem;
        background-repeat: no-repeat;
        .bg-image('imgbg');
    }
    .content{
        padding: 0 10px;
        .top{
            height: 0.37rem;
        }
        .avater-box{
            width:0.6rem;
            height: 0.6rem;
            margin: 0 auto;
        }
        .nick-box{
            margin: 0.12rem auto 0.16rem;
            width: 3rem;
            text-align: center;
            font-size: 0.2rem;
            line-height: 0.28rem;
        }
        .goods-box{
            width: 100%;
            height: 0.51rem;
            padding: 0.12rem 0;
            display: flex;
            background: #fff;
            border-radius: 8px;
            margin-bottom: 0.15rem;
            .card{
                flex: 1;
                height: 100%;
                text-align: center;
                .tit{
                    font-size: 0.14rem;
                    color: #666;
                    .fen-icon{
                        display: inline-block;
                        width: 0.14rem;
                        height: 0.14rem;
                        vertical-align: middle;
                        .icon-image('wenti');
                        background-size: 0.14rem 0.14rem;
                    }
                }
                .num{
                    margin-top: 0.08rem;
                    font-size: 0.24rem;
                    font-weight: bold;
                    color: #333;
                }
            }
        }

        .link{
            padding: 0.21rem 0.06rem 0.1rem;
            border-bottom: 1px solid #E8EFF7;
            .left{
                font-size: 0.16rem;
                .icon{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 0.1rem;
                    width: 0.24rem;
                    height: 0.24rem;
                    background-size: 100% 100%;
                    &.dingdan{
                        .icon-image('dingdan');
                    }
                    &.chuxingdingdan{
                        .icon-image('chuxingdingdan');
                    }
                }
            }
            .right{
                i{
                    position: relative;
                    display: inline-block;
                    width: 0.07rem;
                    height: 0.13rem;
                }
            }
        }
        .serch-history{
            margin-top: 0.3rem;
            .tit{
                font-size: 0.13rem;
                color: #999;
            }
            .his-list{
                margin-top: 0.15rem;
                font-size: 0.18rem;
                color: #333;
                font-weight: bold;
                .icon{
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0 0.08rem;
                    width: 0.15rem;
                    height: 0.14rem;
                    background-size: 100% auto;
                    background-position: center center;
                    &.go-icon{
                        .icon-image('dancheng');
                    }
                    &.goback-icon{

                    }
                }

            }
        }
    }
</style>