<template>
    <div class="main">
        <mt-header title="我的订单" class="t-header">
            <router-link to="" tag="div" slot="left" >
                <mt-button icon="back" class="l-left" @click.native="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
        <div class="tab-top">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">待出行订单</mt-tab-item>
                <mt-tab-item id="2">全部订单</mt-tab-item>
            </mt-navbar>
        </div>
        <div class="order-cont">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="order-list">
                        <div class="info clearfix">
                            <div class="fl">
                                <div class="xingcheng"><span>北京</span><span class="icon go-icon"></span><span>吉隆坡</span></div>
                                <div class="date">出行日期 04-21 15:00</div>
                            </div>
                            <div class="fr">
                                <div class="tag">已出票</div>
                                <div class="price">￥2039</div>
                            </div>
                        </div>
                        <div class="btns">
                            <span class="btn">退票申请</span>
                            <span class="btn">改签申请</span>
                        </div>
                    </div>
                    <div class="order-list">
                        <div class="info clearfix">
                            <div class="fl">
                                <div class="xingcheng"><span>北京</span><span class="icon go-icon"></span><span>吉隆坡</span></div>
                                <div class="date">出行日期 04-21 15:00</div>
                            </div>
                            <div class="fr">
                                <div class="tag">已退票</div>
                                <div class="price">￥2039</div>
                            </div>
                        </div>
                        <div class="btns">
                            <span class="btn">退票申请</span>
                            <span class="btn">改签申请</span>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="order-list">
                        <div class="info clearfix">
                            <div class="fl">
                                <div class="xingcheng"><span>北京</span><span class="icon go-icon"></span><span>吉隆坡</span></div>
                                <div class="date">出行日期 04-21 15:00</div>
                            </div>
                            <div class="fr">
                                <div class="tag">已出票</div>
                                <div class="price">￥2039</div>
                            </div>
                        </div>
                        <div class="btns">
                            <span class="btn">退票申请</span>
                            <span class="btn">改签申请</span>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <TabBar></TabBar>
        <!--<Loading></Loading>-->
        <!--<Notice></Notice>-->
    </div>
</template>

<script>
    import TabBar from '@/components/TabBar'
    import Loading from '@/components/Loading'
    import MHeader from '@/components/MHeader'
    import Notice from '@/components/Notice'
    export default {
        name: "Order",
        data(){
            return {
                selected:"1"
            }
        },
        activated(){
            console.log(this.$route.params.id);
            this.selected = this.$route.params.id;
        },
        components:{
            TabBar,Loading,MHeader,Notice
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
    .t-header {
        background: #fff;
        color: #333;
        .l-left {
            color: #333;
        }
    }
    .tab-top{
        padding: 0 15px;
        background: #fff;
    }
    .order-cont{
        padding: 0 10px;
    }
    .order-list{
        padding: 0.17rem 0.16rem;
        background: #fff;
        margin-top: 0.1rem;
        border-radius: 4px;
        .xingcheng{
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
        .date{
            margin-top: 0.08rem;
            font-size:0.13rem;
            color:rgba(153,153,153,1);
        }
        .tag{
            font-size: 0.15rem;
            color: #FC8231;
        }
        .price{
            margin-top: 0.09rem;
            font-size: 0.14rem;
            color: #333;
        }
        .btns{
            text-align: right;
            margin-top: 0.18rem;
            .btn{
                display: inline-block;
                padding: 0.06rem 0.14rem;
                font-size: 0.12rem;
                background:rgba(255,255,255,1);
                border-radius:0.14rem;
                border:1px solid rgba(217,217,216,1);
                margin-left: 0.1rem;
            }
        }
    }

</style>