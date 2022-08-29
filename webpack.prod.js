const path = require( 'path' );
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // bundling mode
    mode: 'production',
    // output
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js',
    },
});
