const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/res/js/index.js',
	output: {
		path: path.resolve(__dirname, 'src/res'),
		filename: 'script.min.js',
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	}
}