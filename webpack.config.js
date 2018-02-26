var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [        
		path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'bundle.js',
        publicPath: path.join(__dirname, 'public', 'js')    // Webserver doesnt work anyway, so not really needed
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: path.join(__dirname, 'public', 'js')    // Webserver doesnt work anyway, not really needed
    },
    module: {
		rules: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
}
