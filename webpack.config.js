import path from 'path';


module.exports = (webpackConfig)=>{

  webpackConfig.entry={
      app:"./src/index.tsx",
  };
  webpackConfig.output.filename='[name].[hash].bundle.js';
  webpackConfig.output.chunkFilename='[name].[chunkhash].async.js';

  const lessRule=webpackConfig.module.rules[3];

  const sassRule={...lessRule},
        sassRuleUse=sassRule.use;

  sassRule.test=/\.scss$/;

  sassRuleUse[sassRuleUse.length-1]={
    loader:"sass"
  };

  webpackConfig.module.rules.push(sassRule);


  //awesome-typescript
  webpackConfig.module.rules[7].use.pop();

  webpackConfig.resolve.alias={
    'components':path.resolve(__dirname, './src/components'),
  }


  return webpackConfig;
};
