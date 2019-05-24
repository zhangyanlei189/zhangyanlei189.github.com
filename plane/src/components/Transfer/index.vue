<template>
    <div class="transfer">
        <div class="top clearfix">
            <div class="fl"><span class="go-time">04-21 周日 14:30</span><span>北京 - 吉隆坡</span></div>
            <div class="fr duration"><span class="clock-icon"></span><span>14h5m</span></div>
        </div>
        <div class="detail">
            <div class="left-box">
                <div class="time">
                    <span>04-20 周六</span>
                    <div>14:30</div>
                </div>
                <div class="duration"><span class="clock-icon"></span><span>14h5m</span></div>
                <div class="time">
                    <span>04-20 周六</span>
                    <div>14:30</div>
                </div>
            </div>
            <div class="center-line"></div>
            <div class="right-box">
                <div class="airport">BJG 首都机场 T3航站楼</div>
                <div class="airline"><img class="airline-icon" src=""/><span>国泰航空 MF847 波音747</span></div>
                <div class="airport">HKG 香港机场 T1航站楼</div>
            </div>
        </div>
        <div class="trans-box">
            <div class="line"></div>
            <div class="trans-addr"><span class="icon">转</span><span>香港停留1H5m</span></div>
        </div>
        <div class="detail">
            <div class="left-box">
                <div class="time">
                    <span>04-20 周六</span>
                    <div>14:30</div>
                </div>
                <div class="duration"><span class="clock-icon"></span><span>14h5m</span></div>
                <div class="time">
                    <span>04-20 周六</span>
                    <div>14:30</div>
                </div>
            </div>
            <div class="center-line"></div>
            <div class="right-box">
                <div class="airport">BJG 首都机场 T3航站楼</div>
                <div class="airline"><img class="airline-icon" src=""/><span>国泰航空 MF847 波音747</span></div>
                <div class="airport">HKG 香港机场 T1航站楼</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "transfer"
    }
</script>

<style scoped lang="less">
    .icon-image(@url) {
        background-image: url('../../assets/images/@{url}@2x.png');
        background-repeat: no-repeat;
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('../../assets/images/@{url}@3x.png');
        }
    }
    .duration{
        font-size: 0.08rem;
        color: #666;
        .clock-icon{
            display: inline-block;
            vertical-align: middle;
            margin-right: 0.04rem;
            width: 0.13rem;
            height: 0.13rem;
            .icon-image('time10_10');
            background-size: cover;
        }
    }
    .top{
        .go-time{
            font-size: 0.14rem;
            color: #333;
        }
        .go-icon{
            display: inline-block;
            vertical-align: middle;
            margin-right: 0.08rem;
            width: 0.16rem;
            height: 0.19rem;
            .icon-image('qufeiji');
            background-size: 0.16rem 0.19rem;
        }

    }
    .detail{
        position: relative;
        padding: 0 0.19rem;
        margin-top: 0.15rem;
        display: flex;
        .left-box{
            .time{
                text-align: right;
                span{font-size: 0.09rem;color: #666;}
                div{
                    font-size: 0.17rem;
                    color: #333;
                }
            }
            .duration{
                margin: 0.12rem 0;
            }
        }
        .right-box{
            margin-left: 0.45rem;
            .airport{
                display: inline-block;
                vertical-align: middle;
                font-size: 0.17rem;
                color: #333;
                padding-top: 0.06rem;
            }
            .airline{
                margin: 0.17rem 0;
                font-size: 0.11rem;
                color: #333;
                img{display:inline-block;vertical-align:middle;width: 0.1rem;height: 0.1rem;}
                span{display: inline-block;vertical-align: middle;}
            }
        }
        .center-line{
            position: absolute;
            left: 1rem;
            top: 50%;
            transform:translateY(-50%);
            height: 0.8rem;
            width: 3px;
            background: #e6e6e6;
            z-index: 9;
            &:before,&:after{
                content: '';
                position: absolute;
                width: 6px;
                height: 6px;
                border: 3px solid #e6e6e6;
                border-radius: 6px;
                background: #fff;
                left: 50%;
                transform: translateX(-50%);
            }
            &:before{top: 0;}
            &:after{bottom: 0;}
        }

    }

    .trans-box{
        position: relative;
        padding: 0 0.19rem;
        height: 0.15rem;
        .trans-addr{
            position: absolute;;
            left: 0.9rem;
            padding: 0.04rem;
            background: #F3F3F5;
            font-size: 0.12rem;
            border-radius: 0.2rem;
            color: #666666;
            .icon{
                margin-right: 0.02rem;
                width: 0.06rem;
                height: 0.06rem;
                border-radius: 0.12rem;
                background: #fff;
                color: #0185F5;
            }
        }
        .line{
            position: absolute;
            width: 3px;
            left: 1rem;
            height: 150px;
            transform: translateY(-50%);
            background: #e6e6e6;
            z-index: 0;
        }
    }


</style>