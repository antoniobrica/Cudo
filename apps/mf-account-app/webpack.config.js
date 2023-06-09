const WebpackNotifierPlugin = require('webpack-notifier');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function.
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = (config, context) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs,

  // then override your config.
  return {
    ...config,
    devServer: {
      ...config.devServer,
      port: 6001,
    },
    plugins: [
      ...config.plugins,
      new WebpackNotifierPlugin({ title: 'Frontend Project build completed' }),
    ],
    output: {
      ...config.output,
      library: 'mfProducts',
      libraryTarget: 'window',
    },
    optimization: {
      minimize: false,
    },
  };
};
