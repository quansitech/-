const path = require('path');

module.exports = {
    mode: 'development',
    // entry will using the params form gulp.src
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    output: {
        libraryTarget: 'window',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin()
    ]

}