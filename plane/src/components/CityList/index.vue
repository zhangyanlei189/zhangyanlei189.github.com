<template>
    <div class="city-popup" v-show="isShow">
        <mt-header title="选择城市" class="t-header">
            <div slot="left" >
                <mt-button icon="back" class="l-left" v-on:click="closeCity"></mt-button>
            </div>
        </mt-header>

        <div class="search-box">
            <div class="search-ipt">
                <div class="search-ipt-wraper">
                    <input type="text" v-model="searchVal" placeholder="北京/beijing/bj">
                </div>
            </div>
            <div class="search-result"></div>
        </div>

        <div class="search-his">
            <div class="tit-box clearfix">
                <div class="fl">历史记录</div>
                <div class="fr">清除记录</div>
            </div>
            <div class="result-box">
                <div class="box">{{res.length}}</div>
                <div class="box">纽约</div>
                <div class="box">拉丝维加斯</div>
            </div>
        </div>

        <mt-index-list>
            <mt-index-section index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
    export default {
        name: "cityList",
        data() {
            return {
                searchVal:'',
                closeVal:false,
            }
        },
        props:["isShow"],
        methods:{
            closeCity() {
                console.log("发送信息")
                this.$emit("getVal",{closeVal:true});
            }
        },
        computed:{
            res(){
                return this.$store.state.home.airportCityList;
            }
        },
        activated() {
            console.log('activated');
        },
        created() {
            console.log('created')
        },
        mounted() {
            // console.log(this.$store);
            this.$store.dispatch('getAirportCityList');
        }
    }
</script>

<style scoped lang="less">
    .bg-image(@url) {
        background-image: url('../../assets/images/@{url}@2x.png');
        background-repeat: no-repeat;
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
            background-image: url('../../assets/images/@{url}@3x.png');
        }
    }

    .city-popup {
        position: fixed;
        /*right: -3.75rem;*/
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        transition: right 1s;

        &.active {
            right: 0;
        }
    }

    .t-header {
        background: #fff;
        color: #333;

        .l-left {
            color: #333;
        }
    }

    .search-box {
        padding: 0.1rem 16px;
        .search-ipt {
            padding: 0.05rem 0.12rem;
            background-color: #F0EFF5;
            border-radius: 4px;
        }
        .search-ipt-wraper{
            padding-left: 0.15rem;
            .bg-image('magnifier');
            background-position: left  center;
            background-size: 0.14rem 0.15rem;
        }

        input {
            border: none;
            font-size: 13px;
            color: #333;
            padding: 4px 0;
            outline: none;
            margin-left: 5px;
            width: 100%;
            background-color: #F0EFF5;
        }
    }
    .search-his{
        padding: 0.12rem 16px;
        .tit-box{
            font-size:0.13rem;
            color:rgba(153,153,153,1);
            line-height:0.16rem;
        }
        .result-box{
            margin: 0.1rem 0;
            display: flex;
            flex-wrap:wrap;
            justify-content:flex-start;
        }
        .box{
            margin-right: 0.082rem;
            margin-bottom: 0.1rem;
            width: 1.04rem;
            height: 0.4rem;
            color: #333333;
            font-size: 0.14rem;
            text-align: center;
            line-height: 0.4rem;
            border-radius:4px;
            border:1px solid rgba(179,179,179,1);
        }
    }


</style>