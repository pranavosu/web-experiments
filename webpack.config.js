const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    devtool: 'inline-source-map',
	entry: './src/browser/entry.tsx',
	output: {
		filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ""
	},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new WebpackManifestPlugin({})
    ],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};