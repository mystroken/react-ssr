const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	// Tell webpack the root file of our
	// server application
	entry: "./src/client/index.js",

	// Tell webpack where to put the output  file
	// that is generated
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public")
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("css-loader!sass-loader")
			}
		]
	},

	plugins: [new ExtractTextPlugin("bundle.css")]
};

module.exports = merge(baseConfig, config);
