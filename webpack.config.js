

const path = require('path')
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //CSS合併
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //CSS最小化
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

var webpack = require("webpack");

module.exports = (env, options) => {
    console.log(`Webpack is running as ${options.mode} mode.`)
    return {
        // entry: './src/index.js',
        entry: {
            index: path.resolve(__dirname, './src/index.ts'),
            //side: path.resolve(__dirname, './src/app/side.ts')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            //filename: 'js/[name].[hash].js',
            filename: 'js/[name].js',
            clean: true,
        },
        resolve: {
            modules: [__dirname, "src", "node_modules"],
            extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                sourceMap: true
                            }
                        }
                    ]
                },
                /*
                {
                    test: /\.m?js|\.ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/typescript',
                                '@babel/preset-env'
                            ]
                        },
                    }
                },*/
                {
                    test: /.ts|tsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/typescript',
                                '@babel/preset-env'
                            ]
                        },
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    },
                },
                /*{
                    test: /\.css$/,
                    use: [
                        // [style-loader](/loaders/style-loader)
                        { loader: 'style-loader' },
                        // [css-loader](/loaders/css-loader)
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        // [sass-loader](/loaders/sass-loader)
                        //{ loader: 'sass-loader' }
                    ]
                },*/
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        options.mode == "production" ? MiniCssExtractPlugin.loader : "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                url: false
                            }
                        }, {
                            loader: "sass-loader"
                        }
                    ],
                },
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                sources: false,
                                minimize: false,
                            }
                            // 不壓縮 HTML
                        }, {
                            loader: 'pug-html-loader'
                        }
                    ]
                }
            ],
        },
        devServer: {
            hot: true,
            port: 12348
        },
        devtool: 'source-map',
        plugins: [

            new CleanWebpackPlugin({}),
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({ filename: 'index.html', title: "wade", template: 'src/pug/index.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'about.html', title: "wade", template: 'src/pug/about.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'prod.html', title: "wade", template: 'src/pug/prod.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'prod_view.html', title: "wade", template: 'src/pug/prod_view.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'guide.html', title: "wade", template: 'src/pug/guide.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'guide_view.html', title: "wade", template: 'src/pug/guide_view.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'couple.html', title: "wade", template: 'src/pug/couple.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'panorava.html', title: "wade", template: 'src/pug/panorava.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'artwork.html', title: "wade", template: 'src/pug/artwork.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'artwork_view.html', title: "wade", template: 'src/pug/artwork_view.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'personal.html', title: "wade", template: 'src/pug/personal.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'reserve.html', title: "wade", template: 'src/pug/reserve.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'order_tracking.html', title: "wade", template: 'src/pug/order_tracking.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'cart_list.html', title: "wade", template: 'src/pug/cart_list.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'cart_check.html', title: "wade", template: 'src/pug/cart_check.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),
            //new HtmlWebpackPlugin({ filename: 'cart_done.html', title: "wade", template: 'src/pug/cart_done.pug', inject: "body", chunks: ['index']/*, meta: metas, ...propertys }*/ }),

            new MiniCssExtractPlugin({
                //filename: 'css/[name].[hash].css',
                filename: 'css/[name].css',
                chunkFilename: "[id].css",
            }),

            new CopyPlugin({
                patterns: [
                    { from: "./src/images", to: "images" },
                    //{ from: "./src/css", to: "css" },
                    //{ from: "./src/mov", to: "mov" },
                    //{ from: "./src/js", to: "js" },
                    // { from: "./src/fonts", to: "fonts" },
                ],
            }),
            /* 轉 Webp 用的
            new ImageminWebpWebpackPlugin({
                config: [{
                    test: /\.(jpe?g|png)/,
                    options: {
                        quality: 75
                    }
                }],
                overrideExtension: true,
                detailedLogs: false,
                silent: false,
                strict: true
            })*/

        ],
        optimization: {
            minimizer: [
                new HtmlMinimizerPlugin(),
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    extractComments: 'all',
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_console: false,
                            drop_debugger: false
                        }
                    }
                })
            ],
            //minimize: true,
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    }
                },
            },
        },
    }
}