import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const env = process.env;
const HOST = env.HOST || env.npm_package_config_host;
const PORT = env.POST || env.npm_package_config_port;

export default {
    devtool: 'eval-source-map',
    entry: __dirname + "/client/index.js",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client/src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['build']), // 清除编译目录
        new HtmlWebpackPlugin({
            template: __dirname + "/client/index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),//本地服务器所加载的页面所在的目录
        host: HOST,
        port: PORT,
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
}