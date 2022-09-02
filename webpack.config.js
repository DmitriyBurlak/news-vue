const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

module.exports = {
    entry: {
        main: ['babel-polyfill', "./src/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
      },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
    ]
};