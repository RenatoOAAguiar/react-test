const webpack = require('webpack');
const path = require('path');

const config = {

    entry: path.resolve('src/index.js'),

    output:{
        path: path.resolve('build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { 
         test: /\.css$/, 
         loader: 'style-loader!css-loader' 
        },{
         test: /\.scss/,
         exclude: /node_modules/, 
         loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'
        }
    ]
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080,
        historyApiFallback: true,
    }

};

module.exports = config;