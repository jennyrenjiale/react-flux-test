/**
 * Created by jialeren on 2018/10/8.
 */
const path = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src',
    output: {
        filename: 'main.js',
        path: path.appSrc
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss|css)/,
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                use:[
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.appHtml
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};