const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'production',
    optimization: {
    //    usedExports: false
    },
    entry:'./index.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        {
                          useBuiltIns: "usage",
                          corejs: 3,
                          targets: {
                            browsers: ["> 1%", "last 2 versions", "not dead"]
                          }
                        }
                      ]
                    ],
                    plugins: [
                        [
                            "@babel/plugin-transform-runtime",
                            {
                                "corejs": 3
                            },
                        ],
                        // "syntax-dynamic-import",
                        // "array-includes"
                      ]
                }
            },
            {
                test:/\.css$/,
                loader:["style-loader","css-loader"]
            }
        ]
    },
    plugins: [

        // html模板
        new HTMLPlugin({
          template: './index.html',
        }),
    ]
}