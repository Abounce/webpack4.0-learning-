const path = require('path')
const hutmlPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        temp: './src/entry.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'postcss-loader' //配置css加前缀
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)/,  // 匹配图片文件后缀名称
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        outputPath: 'images/'
                    }
                }]
            },
        ]
    },
    plugins: [
        new hutmlPlugin({
            minify: {
                removeAttributeQuotes: true  //去掉attribute的引号
            },
            hash: true,  //去掉js的缓存，
            template: './src/home.html'
        }),
    ],
    // 热更新配置
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'192.168.0.110',
        compress:true,
        port:1717
    },

}