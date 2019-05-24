<template>
    <div class="main">
        <MHeader></MHeader>
        <div class="date-sel" style="display: none">
            <div class="sel-date">
                <div class="sel-date-cont">
                    <div class="date-cell">
                        <span>周五</span>
                        <div>19</div>
                    </div>
                    <div class="date-cell">
                        <span>周六</span>
                        <div>4月20日</div>
                    </div>
                    <div class="date-cell">
                        <span>周日</span>
                        <div>21</div>
                    </div>
                    <div class="date-cell">
                        <span>周一</span>
                        <div>22</div>
                    </div>
                    <div class="date-cell">
                        <span>周二</span>
                        <div>23</div>
                    </div>
                    <div class="date-cell">
                        <span>周三</span>
                        <div>24</div>
                    </div>
                </div>
                <div class="bg-shadow"></div>
            </div>
            <div class="calendar-btn">
                <span class="calendar-icon"></span>
                <div>日历</div>
            </div>
        </div>
        <div class="sel-start">
            <div class="sel-airplane">
                <span class="icon"></span>
                <span class="info">已选去程：2019-04-20 联合航空 UA199</span>
            </div>
            <div class="sel-airport">
                <span class="start">20:10(北京机场T2)</span>
                <span class="icon"></span>
                <span class="end">20:10(北京机场T2)</span>
            </div>
        </div>
        <div class="wangfan-tit">请选返程：2019-05-01</div>
        <div class="search-cont">
            <div class="search-list">
                <div class="info clearfix">
                    <div class="flight-box fl">
                        <div class="flight-depart">
                            <div class="flight-time">14:30</div>
                            <div class="flight-airport">浦东T2</div>
                        </div>
                        <div class="flight-icon">
                            <div class="icon"><span>转</span></div>
                            <div class="city">香港</div>
                        </div>
                        <div class="flight-dest">
                            <div class="flight-time">14:30</div>
                            <div class="flight-airport">浦东T2</div>
                        </div>
                    </div>
                    <div class="fr flight-price">
                        <div class="price">￥<span>3368</span></div>
                        <div class="desc">含税总价</div>
                    </div>
                </div>
                <div class="flight-plane">
                    <div class="f-left">
                        <img src="#" alt="">
                        <span>国泰航空</span> |
                        <span class="clock-icon"></span>
                        <span class="time">28h40m</span> |
                        <span>共享</span>
                    </div>
                    <div class="tickets_num yellow">5张</div>
                </div>
            </div>
            <div class="search-list">
                <div class="info clearfix">
                    <div class="flight-box fl">
                        <div class="flight-depart">
                            <div class="flight-time">14:30</div>
                            <div class="flight-airport">浦东T2</div>
                        </div>
                        <div class="flight-icon">
                            <!--<div class="icon"><span>转</span></div>-->
                            <!--<div class="city">香港</div>-->
                        </div>
                        <div class="flight-dest">
                            <div class="flight-time">14:30</div>
                            <div class="flight-airport">浦东T2</div>
                        </div>
                    </div>
                    <div class="fr flight-price">
                        <div class="price">￥<span>3368</span></div>
                        <div class="desc">含税总价</div>
                    </div>
                </div>
                <div class="flight-plane">
                    <div class="f-left">
                        <img src="#" alt="">
                        <span>国泰航空</span> |
                        <span class="clock-icon"></span>
                        <span class="time">28h40m</span> |
                        <span>共享</span>
                    </div>
                    <div class="tickets_num grey">5张</div>
                </div>
            </div>
        </div>

        <BottomFix></BottomFix>
        <FilterData></FilterData>
    </div>
</template>

<script>
    import Loading from '@/components/Loading'
    import MHeader from '@/components/MHeader'
    import BottomFix from '@/components/BottomFix'
    import FilterData from '@/components/FilterData'
    export default {
        name: "result",
        data(){
            return {

            }
        },
        activated(){

        },
        components:{
            Loading,MHeader,BottomFix,FilterData
        }
    }
</script>

<style scoped lang="less">
    .icon-image(@url) {
        background-repeat: no-repeat;
        background-image: url('../../assets/images/@{url}@2x.png');
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('../../assets/images/@{url}@3x.png');
        }
    }
    .date-sel{
        padding: 0 6px;
        display: flex;
        height: 0.56rem;
        background: #fff;
        position: relative;
        .sel-date{
            flex: 5;
            height: 100%;
            opacity:0.4533;
            overflow-x: auto;
            background: #fff;
            .sel-date-cont{
                display: flex;
                .date-cell{
                    flex: 1;
                    padding: 0.13rem;
                    white-space: nowrap;
                    text-align: center;
                    font-size: 0.12rem;
                    color: #333;
                }
            }
        }
        .calendar-btn{
            flex: 1;
            background: #fff;
            text-align: center;
            .calendar-icon{
                display: block;
                margin:0 auto;
                width: 0.28rem;
                height: 0.28rem;
                .icon-image('calendar');
                background-size: 100% 100%;
            }
        }

    }
    .sel-start{
        padding:0 10px;
        margin-top: 0.1rem;
        .sel-airplane{
            padding: 0.08rem 0.08rem 0.06rem;
            background: #DDEFFF;
            .icon{
                display: inline-block;
                vertical-align: middle;
                margin-right: 0.05rem;
                width: 0.16rem;
                height: 0.19rem;
                .icon-image('qufeiji');
                background-size: 0.16rem 0.19rem;
            }
            .info{
                font-size: 0.12rem;
                color: #333;
            }
        }
        .sel-airport{
            padding: 0.1rem;
            background: #fff;
            span{
                display: inline-block;
                margin: 0 0.06rem;
                vertical-align: middle;
                font-size: 0.14rem;
                color: #333;
                &.icon{
                    width: 0.38rem;
                    height: 2px;
                    .icon-image('timeline');
                    background-size: 100% 100%;
                }
            }
        }
    }
    .wangfan-tit{
        padding: 0 0.1rem;
        margin-top: 0.12rem;
        font-size: 0.12rem;
        color: #333;
    }
    .search-cont{
        padding: 0 6px;
    }
    .search-list {
        padding: 0.17rem 0.16rem;
        background: #fff;
        margin-top: 0.1rem;
        border-radius: 4px;
        .flight-box{
            display: flex;
            .flight-depart,.flight-icon,.flight-dest{
                flex: 1;
            }
            .flight-icon{
                position: relative;
                width: 0.8rem;
                text-align: center;
                .icon-image('timeline');
                background-size: 0.72rem 0.02rem;
                background-position: center center;
                font-size: 0.1rem;
                .icon{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    border-radius:1px;
                    border:1px solid rgba(252,130,49,1);
                    color: rgba(252,130,49,1);
                    padding: 0 0.05rem;
                    background: #fff;
                }
                .city{position: absolute;top: 50%;left: 50%;transform: translate(-50%,55%);color: #999;}
            }
            .flight-time{
                font-size: 0.21rem;
                line-height: 0.29rem;
            }
            .flight-airport{
                font-size: 0.12rem;
                color: #999;
            }
        }
        .flight-price{
            .price{
                color: #0185F5;
                font-size: 0.11rem;
                span{font-size: 0.21rem;}
            }
            .desc{
                font-size: 0.11rem;
                color: #999;
                line-height: 0.16rem;
                text-align: right;
            }
        }
        .flight-plane{
            margin-top: 0.1rem;
            .clock-icon{
                display: inline-block;
                width: 0.1rem;height: 0.1rem;
                .icon-image('time10_10');
                background-size: 0.1rem 0.1rem;
            }
            .f-left{display:inline-block;vertical-align:middle;font-size: 0.12rem;color: #999;}
            img{
                display: inline-block;
                vertical-align: middle;
                width: 0.1rem;
                height: 0.1rem;
            }
            span{
                display: inline-block;
                vertical-align: middle;
                font-size: 0.12rem;
                color:#999;
            }
            .tickets_num{
                float: right;
                margin-top: 0.02rem;
                vertical-align: middle;
                padding: 0 0.04rem;
                font-size: 0.12rem;
                &.yellow{
                    color: #FC8231;
                    border: 1px solid #FC8231;
                }
                &.grey{
                    color: #E6E6E6;
                    border: 1px solid #E6E6E6;
                }
            }
        }
    }
</style>