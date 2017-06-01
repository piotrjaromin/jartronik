const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
    devtool: "cheap-module-source-map",
    entry: {
        app: APP_DIR + '/app.js',
        vendor: ["jquery", "bootstrap", "moment", "react", "react-dom", "react-router"]
    },
    output: {
        path: BUILD_DIR,
        filename: 'js/app.js'
    },
    module: {
        loaders: [{
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
             { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: "vendor",
            filename: "js/vendor.js"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            // sourceMap: false,
            sourceMap: true,
            mangle: true,
            // minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    externals: {
        'Config': JSON.stringify(process.env.ENV === 'production' ? require('./config/prod.json') : require('./config/test.json'))
    }
};

module.exports = config;