var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: [
            './vendor.imports.js',
            './app.js'
        ]
    },
    output: {
        path: __dirname + '/bundle/js',
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src/theme-sass')],
                loader: 'style-loader!css-loader!sass-loader'
            }
        ] //loaders
    } //module
};