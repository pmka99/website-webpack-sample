const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry: {
        bundle: "./src/script.js"
    },
    output:{
        filename: "[name].js",
        path: path.resolve(__dirname , "build")
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'images'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'  
            } ,
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        title : 'Roocket App',
        template : 'index.htm'
    })]
}
