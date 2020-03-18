const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    publicPath: "http://0.0.0.0:8080",
    outputDir: './dist/',

    chainWebpack: config => {
        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: './webpack-stats.json'}]);

        config.output
            .filename('bundles.js');

        config.optimization
            .splitChunks(false);

        config.resolve.alias
            .set('__STATIC__', 'static');

        config.devServer
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .disableHostCheck(true)
            .headers({"Access-Control-Allow-Origin": ["\*"]})
    },
    // Uncomment before executing 'npm run build'
    // css: {
    //     extract: {
    //         filename: 'bundle.css',
    //         chunkFilename: 'bundle.css',
    //     },
    // }
};