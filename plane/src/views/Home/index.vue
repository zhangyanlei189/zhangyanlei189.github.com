<template>
    <div class="main">
        <div class="content">
            <div class="home_menu">
                <router-link tag="div" to="/home/oneWay" class="tab-list">
                    <span>单程</span>
                </router-link>
                <router-link tag="div" to="/home/goBack" class="tab-list">
                    <span>往返</span>
                </router-link>
                <router-link tag="div" to="/home/moreWay" class="tab-list">
                    <span>多程</span>
                </router-link>
            </div>
            <keep-alive>
                <router-view />
            </keep-alive>
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
    .main{
        padding-top: 1.57rem;
        width: 100%;
        background-size: 100%  1.96rem;
        background-repeat: no-repeat;
        .bg-image('banner1');
    }
    .content{
        padding: 0 8px;
    }
    .home_menu{
        width: 100%; height: 0.48rem;border-radius:8px 8px 0px 0px; display: flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.2829); z-index:10;
        overflow: hidden;
        .tab-list{
            height: 100%;
            line-height: 0.48rem;
            flex: 1;
            text-align: center;
            color: #fff;
            &.active{
                background: #fff;
                color: rgb(51,51,51);
            }
        }
    }
    .home_menu .city_name{height:100%; line-height: 45px;flex: 1}
    .home_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .home_menu .tab-list.router-link-active{ background: #fff;color: rgb(51,51,51);}

    .slide-enter-active{ animation : 13s detailMove;}
    @keyframes detailMove{
        0%{
            transform : translateX(100%);
        }
        100%{
            transform : translateX(0);
        }
    }
</style>