/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/index.jsx'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|axios|react-redux)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            favicon: './src/assets/icons/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new Dotenv(),
    ],
    devServer: {
        port: 3000, // you can change the port
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/, // to import images and fonts
                loader: 'url-loader',
                options: {
                    limit: false,
                    name: '[name].[ext]',
                    outputPath: 'assets',
                },
            },
        ],
    },
};
