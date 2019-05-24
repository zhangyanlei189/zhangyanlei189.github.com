<template>
    <div class="loading-box">
        <div class="loading-bg"></div>
        <div class="loading-tip">航班加载中...</div>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped lang="less">
    .bg-image(@url) {
        background-image: url('/images/@{url}@2x.png');
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('/images/@{url}@3x.png');
        }
    }
    .loading-box{
        position: fixed;
        left: 0;right: 0;bottom: 0;top: 0;
        padding-top: 2rem;
        z-index: 999;
        background: #F1F2F7;
        .loading-bg{
            width: 2.64rem;
            height: 1.33rem;
            margin: 0 auto;
            .bg-image('loading');
            background-size: 2.64rem 1.33rem;
        }
        .loading-tip{
            margin-top: 0.26rem;
            font-size: 0.16rem;
            text-align: center;
            color: #999;
        }
    }
</style>