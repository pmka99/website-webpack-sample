const path=require('path')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const config={
    entry: {
        bundle: "./src/script.js",
        admin:'./src/admin.js'
    },
    output:{
        
        path: path.resolve(__dirname , "build"),
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    module: {
        rules:[]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title : 'App',
            template : 'src/index.htm',
            filename :'index.html',
            chunks :['bundle','vendors~admin~bundle']
        }),
        new HtmlWebpackPlugin({
            title : 'admin App',
            template : 'src/index.htm',
            filename : 'admin.html',
            chunks:['admin','vendors~admin~bundle']
        }),
        
        new CleanWebpackPlugin()
    ]

}




module.exports=(env,{mode})=>{
    const isDevelopment= mode==='development';
    
    if(isDevelopment){
        config.devServer= {
            static: {
              directory: path.join(__dirname, 'build'),
            },
            compress: true,
            port: 8888
        }
    }


    config.module.rules.push(...[{
        test:/\.css$/,
        use:[isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
        test:/\.s[ac]ss$/,
        use:[isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
    },
    {
        test:/\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
            filename: isDevelopment ? 'images/[name][ext][query]' : 'images/[hash][ext][query]'
        } 
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: isDevelopment ? 'fonts/[name][ext][query]' : 'fonts/[hash][ext][query]'
        }
    }
    ])
    config.output.filename = isDevelopment ? "[name].js" : "[name].[contenthash].js"
    

    if(! isDevelopment){
        config.plugins.push(...[new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),])
        config.module.rules.push({
            test: /\.m?js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-env']
                }
            }
        })
    }
    return config;
}
