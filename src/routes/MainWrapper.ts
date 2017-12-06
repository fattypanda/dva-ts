import * as React from 'react';
import dynamic from 'dva/dynamic';
import MainWrapper from 'modules/MainWrapper/Page'



export default (app: any): React.Component => {
  return MainWrapper
  // return dynamic({
  //     app,
  //     models: () => [
  //         System.import(/* webpackChunkName: "exampleModel" */ 'modules/MainWrapper/Model'),
  //     ],
  //     component: () => System.import(/* webpackChunkName: "IndexPage" */'modules/MainWrapper/Page'),
  // });
}