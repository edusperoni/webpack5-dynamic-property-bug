const webpack = require('webpack');

module.exports = function(env) {

    const usedExportsConfig = {
        mode: 'production',
        target: 'node',
        entry: {
            usedExportsFalse: './src/index.mjs'
        },
        optimization: {
            minimize: false,
            usedExports: false, // this line fixes "ExportedExtended"
            // concatenateModules: false,
        },
        plugins: [
            new webpack.DefinePlugin({
                "WEBPACK_BUILD_NAME": `'usedExports'`
            })
        ]
    };

    const noUsedExportsConfig = {
        mode: 'production',
        target: 'node',
        entry: {
            default: './src/index.mjs'
        },
        optimization: {
            minimize: false,
            // concatenateModules: false,
        },
        plugins: [
            new webpack.DefinePlugin({
                "WEBPACK_BUILD_NAME": `'default'`
            })
        ]
    };



    return [usedExportsConfig, noUsedExportsConfig];
}