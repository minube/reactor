const path = require('path');
const webpack = require('webpack'); // eslint-disable-line

module.exports = ({ config, mode }) => {
  const { env: { NODE_ENV = 'development ' } } = process;

  config.resolve = {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
    },
  };

  if (config.plugins && config.module.rules) {
    config.module.rules.push({
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: { name: '[name].[ext]' },
      },
    });

    config
      .plugins
      .push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }));
  }

  return config;
};
