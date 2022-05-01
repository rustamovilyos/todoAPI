const path = require("path");

module.exports = {
    entry: "./frontend/src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js'
    },
    module:{
        rules: [{
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
}
