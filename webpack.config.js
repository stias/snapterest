const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './source/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'snapterest.js'
    },
    devServer: {
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'build/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'node_modules')
            },
        ],
    },
};
