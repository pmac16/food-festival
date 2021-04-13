const path = require("path");

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //normal to put it in a distribution folder
        filename: 'main.bundle.js'
    },
    mode: 'development'
}; 