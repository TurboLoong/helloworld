import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.config';

const { rules, globalVariable } = prodConfig(process.env);

export default webpackMerge(baseConfig, {
    module: {
        rules: [
            ...rules
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ...globalVariable
        }),
        new webpack.optimize.UglifyJsPlugin({    // 压缩混淆js文件
            sourceMap: true,
            comments: false
        })
    ]
});

function prodConfig(env) {
    return {
        rules: [{
            /**
             * eslint代码规范校验
             */
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            include: [path.join(__dirname, 'client/src')],
            use: [{
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc.prod.json'
                }
            }]
        }],
        globalVariable: {
            __DEV__: false,
            'process.env.NODE_ENV': JSON.stringify('production')
        }
    };
}

