const path = require('path');
module.exports = {
    entry: './source/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'snapterest.js'
    },
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
