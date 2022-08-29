const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // entry files
    entry: './src/index.ts',
    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
       })
    ],
};
