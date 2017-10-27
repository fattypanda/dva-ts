import dva from 'dva';
import router from './router';
import createLoading from 'dva-loading';
import createLastEffectTime from 'utils/dvaLastEffectTime';
// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading({ effects: true }));
app.use(createLastEffectTime());
// 3. Model
// app.model(require('./models/example'));


// 4. Router
app.router(router);

// 5. Start
app.start('#root');
