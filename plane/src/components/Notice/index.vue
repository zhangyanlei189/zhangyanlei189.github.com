<template>
    <div class="notice">
        <mt-popup v-model="popupVisible" position="bottom" class="mt-popup">
            <div class="bar-wrap">
                <div class="bar-top">
                    <mt-navbar v-model="selected">
                        <mt-tab-item id="1">行李说明</mt-tab-item>
                        <mt-tab-item id="2">退&改规则</mt-tab-item>
                        <mt-tab-item id="3">票价明细</mt-tab-item>
                    </mt-navbar>
                </div>
                <div class="bk10"></div>
                <!-- tab-container -->
                <div class="bar-cont">
                    <mt-tab-container v-model="selected">
                        <mt-tab-container-item id="1" class="package">
                            <div class="tit"><span class="icon"></span><span>去程</span></div>
                            <table>
                                <tr>
                                    <th>北京-香港 北京机场 T3航站楼</th>
                                </tr>
                                <tr>
                                    <td>23KG</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <th>香港-吉普岛 香港机场 T1航站楼</th>
                                </tr>
                                <tr>
                                    <td>23KG</td>
                                </tr>
                            </table>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2" class="rules">

                            <div class="tab-t">
                                <div class="tab-cell-1 tab-cell" v-on:click="clickMan"><span :class="isSelMan?'act':''">成人</span></div>
                                <div class="tab-cell-2 tab-cell" v-on:click="clickChild"><span :class="isSelMan?'':'act'">儿童</span></div>
                            </div>
                            <div class="tab-cont">
                                <div class="tab-cont-1" v-if="isSelMan">
                                    <div class="tit"><span class="icon"></span><span>出发机场-到达机场</span></div>
                                    <table>
                                        <tr>
                                            <th>全部未使用</th>
                                            <th>有效时间与收费</th>
                                        </tr>
                                        <tr>
                                            <td>退票</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>改期</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>误机退票</td>
                                            <td>以航司规定为准</td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <th>全部未使用</th>
                                            <th>有效时间与收费</th>
                                        </tr>
                                        <tr>
                                            <td>退票</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>改期</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>误机退票</td>
                                            <td>以航司规定为准</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="tab-cont-1" v-else>
                                    <div class="tit"><span class="icon"></span><span>出发机场-到达机场-儿童</span></div>
                                    <table>
                                        <tr>
                                            <th>全部未使用</th>
                                            <th>有效时间与收费</th>
                                        </tr>
                                        <tr>
                                            <td>退票</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>改期</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>误机退票</td>
                                            <td>以航司规定为准</td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <th>全部未使用</th>
                                            <th>有效时间与收费</th>
                                        </tr>
                                        <tr>
                                            <td>退票</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>改期</td>
                                            <td>价格CNY</td>
                                        </tr>
                                        <tr>
                                            <td>误机退票</td>
                                            <td>以航司规定为准</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </mt-tab-container-item>
                        <mt-tab-container-item id="3" class="mingxi">
                            <div class="tit"><span class="icon"></span><span>票价明细-成人</span></div>
                            <table>
                                <tr>
                                    <th>人数</th>
                                    <th>总票价(不含税)</th>
                                    <th>总税费</th>
                                    <th>含税总价</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>￥7598</td>
                                    <td>￥2076</td>
                                    <td>￥9674</td>
                                </tr>
                            </table>
                            <div class="tit"><span class="icon"></span><span>票价明细-儿童</span></div>
                            <table>
                                <tr>
                                    <th>人数</th>
                                    <th>总票价(不含税)</th>
                                    <th>总税费</th>
                                    <th>含税总价</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>￥7598</td>
                                    <td>￥2076</td>
                                    <td>￥9674</td>
                                </tr>
                            </table>
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        name: "notice",
        data(){
            return {
                popupVisible:true,
                selected: '1',
                isSelMan:true
            }
        },
        methods:{
            clickMan:function () {
                this.isSelMan = true;
            },
            clickChild:function () {
                this.isSelMan = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .bk10{height: 5px;}
    .bg-image(@url) {
        background-repeat: no-repeat;
        background-image: url('../../assets/images/@{url}@2x.png');
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('../../assets/images/@{url}@3x.png');
        }
    }
    .mt-popup{
        width: 100%;
        border-radius:6px 6px 0px 0px;
    }
    .bar-wrap{
        height: 5.5rem;
        background: #fff;
        border-radius:6px 6px 0px 0px;
        overflow-y: auto;
        .bar-top{
            border-bottom: 1px solid #eee;
            padding: 0 16px 2px;
        }
        .bar-cont{
            padding: 0 16px;
        }

    }
    table{
        border:1px solid rgba(224,223,223,1);
        width: 100%;
        border-collapse:collapse;
        border-spacing:0;
        margin-bottom: 0.08rem;
        th{
            text-align: left;
            background:rgba(224,223,223,1);
            font-size: 0.14rem;
            color: #666;
            padding: 0.06rem 0.11rem;
            font-weight: normal;
        }
        td{
            font-size: 0.14rem;
            padding: 0.12rem 0.11rem;
        }
    }
    .bar-cont{
        .tit{
            font-size: 0.16rem;
            color: #333;
            margin: 0.2rem 0 0.14rem;
        }
        .icon{
            display: inline-block;
            vertical-align: middle;
            margin-right: 0.05rem;
            width: 0.2rem;
            height: 0.2rem;
            background-size: 100% 100%;
        }
        .package{
            .icon{
                .bg-image('xingli');
            }
        }
        .mingxi{
            .icon{
                .bg-image('mingxi');
            }
        }
        .rules{
            .icon{
                .bg-image('guize');
            }
        }
    }

    .tab-t{
        border-bottom: 1px solid #eee;
        display: flex;
        padding: 10px;
        .tab-cell{
            flex: 1;
            text-align: center;
            span{
                padding-bottom: 10px;
                &.act{
                    border-bottom: 2px solid #0185F5;
                }
            }
        }
    }



</style>