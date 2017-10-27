import dva from 'dva';
import router from './router';
import createLoading from 'dva-loading';
import createLastEffectTime from 'utils/dvaLastEffectTime';

import MainWrapperModel from 'modules/MainWrapper/Model';

const modelList = [
    MainWrapperModel
]
// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading({ effects: true }));
app.use(createLastEffectTime());
// 3. Model



modelList.forEach(app.model)

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
