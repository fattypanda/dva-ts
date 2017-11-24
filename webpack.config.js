import path from 'path';


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
  webpackConfig.module.rules[7].use.pop();

  webpackConfig.resolve.alias = {
    'components': path.resolve(__dirname, './src/components'),
    'domainComponents': path.resolve(__dirname, './src/domainComponents'),
    'utils': path.resolve(__dirname, './src/utils'),
    'modules': path.resolve(__dirname, './src/modules'),
    'routes': path.resolve(__dirname, "./src/routes"),
    'interfaces': path.resolve(__dirname, "./src/interfaces"),
    "configs": path.resolve(__dirname, "./src/configs")
  }

  webpackConfig.plugins.push(new webpack.HashedModuleIdsPlugin())
  webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: "vendor.js"
  }))


  return webpackConfig;
};
