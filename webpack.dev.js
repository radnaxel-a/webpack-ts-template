const path = require( 'path' );
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    // bundling mode
    mode: 'development',
    // devtool
    devtool: 'cheap-source-map',
    watch: true,
    //output
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },
});
