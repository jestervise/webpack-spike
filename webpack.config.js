
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //entry point
    "entry" : {index: path.resolve(__dirname,"source","index.js")},
    //output location 
    "output":{ path: path.resolve(__dirname, "build"), filename: "[name].js" },
    //plugins are third party extension that alter how webpack works
    "plugins":[
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,"source","index.html")
        })
    ],
    //loader deals with various format of filename and bundle them, test is the file name , and use the loader from right to left
    module: {
        rules: [
            {
                test: /\.filename1$/,
                use: ["loader-b", "loader-a"]
            },
            {
                test: /\.filename2$/,
                use: ["loader-d", "loader-c"]
            },
            //css loader to deal with css file
            {
                test: /\.css$/,
                //css loader for loading css file, style loader is for loading style script in DOM
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.scss$/,
                use: ['style-loader','css-loader','sass-loader']

            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
         ]
    },
    optimization:{
        splitChunks:{chunks:"all"}
    }
}