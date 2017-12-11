import path from 'path';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const DIST_PATH = 'dist';
const extractVendor = new ExtractTextPlugin(`${DIST_PATH}/css/[contenthash].vendor.css`);
const extractStyle = new ExtractTextPlugin(`${DIST_PATH}/css/[contenthash].style.css`);

export default {
    entry: {
        main: ['babel-polyfill', './client/index.js']
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'build'),
        filename: `${DIST_PATH}/js/[chunkhash].[name].js`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'client'),
            use: ['babel-loader']
        }, {
            test: /\.(css|scss)$/,
            include: path.join(__dirname, 'node_modules'),
            use: extractVendor.extract(['css-loader', 'postcss-loader', 'sass-loader'])
        }, {
            test: /\.(css|scss)$/,
            include: path.join(__dirname, 'client'),
            use: extractStyle.extract([
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 2,
                        localIdentName: '[local]'
                    }
                },
                'postcss-loader',
                'sass-loader'
            ])
            /**
             * 字体加载器
             */
        }, {
            test: /\.(woff|eot|ttf|svg)$/,
            include: path.join(__dirname, 'client/fonts'),
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10,
                    name: `${DIST_PATH}/fonts/[hash].[ext]`
                }
            }]
            /**
             * 图片加载器
             */
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            exclude: path.join(__dirname, 'client/fonts'),
            include: path.join(__dirname, 'client/image'),
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10,
                    name: `${DIST_PATH}/images/[hash].[ext]`
                }
            }]
        }, {
            test: /\.json$/,
            include: path.join(__dirname, 'client'),
            use: [{
                loader: 'json-loader'
            }]
        }]
    },
    plugins: [
        extractVendor,
        extractStyle, // 生成单独的CSS文件
        new CleanWebpackPlugin(['build']),
        new webpack.optimize.CommonsChunkPlugin('vendor'), // 清除编译目录
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成到build目录的index.html
            template: './client/index.html' // 当前目录下的index.html
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true, // 压缩loader读取的文件
            options: {
                postcss: function() {
                    return [precss, autoprefixer];
                }
            }
        })
    ]
};