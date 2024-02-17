const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// Entry point
	entry: './src/index.js',

	// Output of the bundled file
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	// Module rules for processing different types of files
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'], // Transpile ES6 and JSX to ES5
					},
				},
			},
			// CSS Loader Example
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			// File Loader Example for images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},

	// Resolve .js and .jsx extensions
	resolve: {
		extensions: ['.js', '.jsx'],
	},

	// Plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html', // Path to your HTML template
		}),
	],

	// Development Server Configuration
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
	},
};
