import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.config.base';

const env = process.env;
const HOST = env.HOST || env.npm_package_config_host;
const PORT = env.POST || env.npm_package_config_port;
const DIST_PATH = 'server';

export default webpackMerge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // 出错不终止插件
        new webpack.NoEmitOnErrorsPlugin(),
        // 配置全局变量
        new webpack.DefinePlugin({
            __DEV__: true
        })
    ],
    devServer: {
        host: HOST,
        port: PORT,
        inline: true,
        historyApiFallback: true, // using html5 router.
        contentBase: path.join(__dirname, DIST_PATH)
    }
});