import * as React from 'react';
import dynamic from 'dva/dynamic';

export default (app: any): React.Component => {
    return dynamic({
        app,
        models: () => [
            System.import(/* webpackChunkName: "exampleModel" */ 'modules/MainWrapper/Model'),
        ],
        component: () => System.import(/* webpackChunkName: "IndexPage" */'modules/MainWrapper/Page'),
    });
}