/***
 * @creater:wjiban
 * @create_time:20-9-3 15:14:21
 * @last_modify:wjiban
 * @modify_time:20-9-7 14:59:50
 * @line_count:20
 **/

// this file is for cases where we need to access the
// webpack config as a file when using CLI commands.

var webpack = require('webpack')

module.exports = {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common'),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            Popper: ['popper.js', 'default'],
        })
    ],
    reles: [{
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
    }]
}
