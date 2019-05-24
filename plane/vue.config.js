module.exports = {
    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8081,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {
            '/BaseData':{
                target:'http://39.106.67.227',
                changeOrigin: true
            }
        }
        // before: app => {}
    }, // 第三方插件配置
};