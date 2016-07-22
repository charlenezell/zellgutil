var path=require("path");
var webpack=require("webpack");
var postcss=require("postcss");
var sprites = require('postcss-sprites').default;
var opts = {
    stylesheetPath: './css',
    spritePath: './css/images/',
    hooks: {
        onUpdateRule: function(rule, token, image) {
            var backgroundSizeX = (image.spriteWidth / image.coords.width) * 100;
            var backgroundSizeY = (image.spriteHeight / image.coords.height) * 100;
            var backgroundPositionX = (image.coords.x / (image.spriteWidth - image.coords.width)) * 100;
            var backgroundPositionY = (image.coords.y / (image.spriteHeight - image.coords.height)) * 100;

            backgroundSizeX = isNaN(backgroundSizeX) ? 0 : backgroundSizeX;
            backgroundSizeY = isNaN(backgroundSizeY) ? 0 : backgroundSizeY;
            backgroundPositionX = isNaN(backgroundPositionX) ? 0 : backgroundPositionX;
            backgroundPositionY = isNaN(backgroundPositionY) ? 0 : backgroundPositionY;

            var backgroundImage = postcss.decl({
                prop: 'background-image',
                value: 'url(' + image.spriteUrl + ')'
            });

            var backgroundSize = postcss.decl({
                prop: 'background-size',
                value: backgroundSizeX + '% ' + backgroundSizeY + '%'
            });

            var backgroundPosition = postcss.decl({
                prop: 'background-position',
                value: backgroundPositionX + '% ' + backgroundPositionY + '%'
            });

            rule.insertAfter(token, backgroundImage);
            rule.insertAfter(backgroundImage, backgroundPosition);
            rule.insertAfter(backgroundPosition, backgroundSize);
        }
    }
};
module.exports = {
    entry: {
        vendor:["./bower_components/jquery/dist/jquery.min.js"],
        app:"./index.es6"
    },
    babel:{
        presets:["es2015","react"]
    },
    postcss: function () {
        return [require("postcss-cssnext")()/*,sprites(sprites_opts)*/];
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css!postcss"
        }/*,{
            test:/\.(png|jpg)$/,
            loader:'url?limit=500000&name=[path][hash:4].[ext]'
        }*/
        ,{
            test:/\.(jsx|es6)?$/,
            exclude:/(node_modules|bower_components)/,
            loader:'babel'
        }
        ]
    }
};
