<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/home">
                <div class="icon icon-home"></div>
                <p>首页</p>
            </router-link>
            <router-link tag="li" to="/order">
                <div class="icon icon-order"></div>
                <p>订单</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <div class="icon icon-mine"></div>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped lang="less">
    .bg-image(@url) {
        background-image: url('../../assets/images/tab_icons/@{url}@2x.png');
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('../../assets/images/tab_icons/@{url}@3x.png');
        }
    }
    #footer{ width:100%; height:50px; background: white; position: fixed; left: 0; bottom:0;}
    #footer ul{ display: flex; text-align: center; height:50px; align-items:center;}
    #footer ul li{ flex:1; height:40px;}
    /*#footer ul li.active{ color: #f03d37;}*/
    #footer ul li.router-link-active{
        .icon-home{
            .bg-image('home_fill');
        }
        .icon-order{
            .bg-image('task_fill')
        }
        .icon-mine{
            .bg-image('people_fill')
        }
        p{
            color: #0185F5;
        }
    }//vue提供的当前选中的样式
    #footer ul {
        .icon{
            width: 0.24rem;
            height: 0.24rem;
            margin: 0 auto;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            &.icon-home{
                .bg-image('home');
            }
            &.icon-order{
                .bg-image('task');
            }
            &.icon-mine{
                .bg-image('people');
            }
        }
        p {
            font-size: 12px;
            line-height: 18px;
        }
    }
</style>