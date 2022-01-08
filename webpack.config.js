const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
        clickAnalysis: './src/ClickAnalysis.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
};