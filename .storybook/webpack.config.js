// const path = require('path');
// const webpack = require('webpack'); // eslint-disable-line

// module.exports = (config, type) => {
//   const { env: { NODE_ENV = 'development ' } } = process;

//   config.resolve = {
//     modules: ['node_modules'],
//     extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
//     alias: {
//       'react-native': 'react-native-web',
//     },
//   };

//   if (config.plugins && config.module.rules) {
//     config.module.rules.push({
//       test: /\.(gif|jpe?g|png|svg)$/,
//       use: {
//         loader: 'url-loader',
//         options: { name: '[name].[ext]' },
//       },
//     });

//     config
//       .plugins
//       .push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }));
//   }

//   return config;
// };


// module.exports = ({ config, mode }) => { config.module.rules.push(...); return config; }
module.exports = ({ config, mode }) => { return config; }
