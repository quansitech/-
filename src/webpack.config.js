const path = require('path');

module.exports = {
    mode: 'development',
    // entry will using the params form gulp.src
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    output: {
        libraryTarget: 'window',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin()
    ]

}