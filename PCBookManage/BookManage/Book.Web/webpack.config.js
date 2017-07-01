const path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'built'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css/,
            loader: "style-loader?css-loader"
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.jpg$/,
            loader: "file-loader"
        }, {
            test: /\.js$/,
            loader: 'babel-loader?' + JSON.stringify({
                presets: ['es2015']
            }),
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'scripts'),
                path.resolve(__dirname, 'Content')
            ]
        }]
    },
    devServer: {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        publicPath: "/built/"
    }
}