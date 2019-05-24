<template>
    <div class="header-box">
        <div class="res-left">
            <i class="res-icon" @click.native="$router.back(-1)"></i>
        </div>
        <h1><span>北京</span><span class="icon go"></span><span>纽约</span></h1>
        <div class="res-right"></div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                goType:{go:"goback",goBack:""}
            }
        }
    }
</script>

<style scoped lang="less">
    .bg-image(@url) {
        background-image: url('../../assets/images/@{url}@2x.png');
        background-repeat: no-repeat;
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('../../assets/images/@{url}@3x.png');
        }
    }
    .header-box{
        position: relative;
        top: 0;
        padding: 0 10px;
        height: 40px;
        z-index: 9999;
        background: #fff;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        h1{
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 18px;
            font-weight: normal;
            .icon{
                display: inline-block;
                vertical-align: middle;
                width: 18px;
                height: 14px;
                background-size: 18px 14px;
                margin: 0 6px;
                &.go{
                    .bg-image('dancheng');

                }
            }
        }


        .res-left,.res-right{
            -webkit-box-flex: .5;
            -ms-flex: .5;
            flex: .5;
        }
        .res-left{
            text-align: left;
            .res-icon{
                display: inline-block;
                width: 18px;
                height: 18px;
                vertical-align: middle;
                .bg-image('goback');
                background-size: 10px 18px;

            }

        }

    }
</style>