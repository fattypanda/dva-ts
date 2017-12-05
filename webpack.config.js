import path from 'path';
import webpack from 'webpack'
import aliasConfig from './alias.configs'


module.exports = (webpackConfig) => {


  webpackConfig.output.filename = '[name].[hash].bundle.js';
  webpackConfig.output.chunkFilename = '[name].[chunkhash].async.js';

  webpackConfig.entry.vendor = [
    "dva",
    "dva-loading",
    "react",
    "react-dom",
    "moment"
  ]

  const lessRule = webpackConfig.module.rules[3];

  const sassRule = { ...lessRule },
    sassRuleUse = sassRule.use;

  sassRule.test = /\.scss$/;

  sassRuleUse[sassRuleUse.length - 1] = {
    loader: "sass"
  };

  webpackConfig.module.rules.push(sassRule);

  //awesome-typescript
  // webpackConfig.module.rules[7].use.pop();

  webpackConfig.resolve.alias = aliasConfig

  webpackConfig.plugins.push(new webpack.HashedModuleIdsPlugin())
  webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: "vendor.js"
  }))


  return webpackConfig;
};
