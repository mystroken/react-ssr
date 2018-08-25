module.exports = {
	// Tell webpack to run babel on every file it runs though
	module: {
		rules: [
			{
        test: /\.jsx?$/,
        exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(woff2?|ttf|eot|svg|otf|png|jpg|jpeg)$/,
				loader: "url-loader",
				options: { limit: 10000 }
			}
		]
	}
};
