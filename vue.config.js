const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
    // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:80/',//接口的前缀
                ws:true,//代理websocked
                changeOrigin:true,//虚拟的站点需要更管origin
                pathRewrite:{
                    '^/api':''//重写路径
                }
            }
        },
    }

}