const path = require('path');

module.exports = {
	entry: './index.ts',
	resolve: {
		alias: {
			tm: __dirname,
			frontendReact: path.resolve(__dirname, '../frontendReact/'),
		},
		extensions: ['.js', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	}
}