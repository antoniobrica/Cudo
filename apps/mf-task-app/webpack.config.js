const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  const newConfig = {
    ...config,
    devServer: {
      ...config.devServer,
      port: 6005,
      host: '0.0.0.0',
    },
  };

  return newConfig;
});
