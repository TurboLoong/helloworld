module.exports = {
    output: {
        library: "legoQuotes",
        libraryTarget: "umd",
        filename: "legoQuotes.js"
    },
    devtool: "#inline-source-map",
    externals: [
        {
            lodash: {
                root: "_",
                commonjs: "lodash",
                commonjs2: "lodash",
                amd: "lodash"
            }
        }
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    compact: false // because I want readable output
                }
            }
        ]
    }
}