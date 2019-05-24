<template>
    <div class="detail">
        <!--<div style="padding: 10px;background: #fff;">
            <Trip></Trip>
        </div>-->
        <div style="padding: 10px;background: #fff;margin-top: 20px;">
            <transfer></transfer>
        </div>
        <div class="bottom-info">
            <div class="top clearfix">
                <div class="fl">
                    <div class="money">￥<span>5500</span></div>
                    <div class="top-info">经济舱 | <span>可退票，改签700起</span><span class="icon"></span></div>
                </div>
                <div class="fr book">订</div>
            </div>
            <div class="info">
                <span class="icon"></span>
                <span class="package">每人托运2件，每件23KG</span>
                <span class="icon"></span>
                <span>提供发票</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Trip from '@/components/Trip'
    import Transfer from "@/components/Transfer";
    export default {
        name: "detail",
        components:{
            Transfer,
            Trip
        }
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
    .detail{
        padding: 10px 6px;
    }
    .bottom-info{
        border-radius: 4px;
        padding: 0.1rem 0.15rem;
        background: #fff;
        margin-top: 0.1rem;
        .top{
            .money{
                color: #0185F5;
                font-size: 0.12rem;
                span{
                    font-size: 0.21rem;
                }
            }
            .top-info{
                margin-top: 0.04rem;
                font-size: 0.12rem;
                color: #333;
                .icon{
                    display: inline-block;
                    vertical-align: middle;
                    width: 0.08rem;
                    height: 0.08rem;
                    .icon-image('more');
                    background-size: 0.08rem 0.08rem;
                    margin-left: 0.04rem;

                }
            }
        }
        .book{
            font-size: 0.21rem;
            width:0.42rem;
            height:0.42rem;
            background:linear-gradient(270deg,rgba(254,126,0,1) 0%,rgba(255,165,0,1) 100%);
            border-radius:4px;
            text-align: center;
            line-height: 0.42rem;
            color: #fff;
        }
        .info{
            padding: 0.09rem;
            font-size: 0.12rem;
            color: #333;
            margin-top: 0.09rem;
            background: #FAFAFA;
            .icon{
                display: inline-block;
                vertical-align: middle;
                width: 0.15rem;
                height: 0.15rem;
                .icon-image('right');
                background-size: 0.15rem 0.15rem;
            }
            .package{
                margin-right: 0.2rem;
            }
        }
    }

</style>