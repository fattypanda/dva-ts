import { NAMESPACE } from './ConstConfig'
import { DvaModel } from 'interfaces/index';



const model: DvaModel<any> = {

  namespace: NAMESPACE,

  state: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    * fetch(action, sagaEffects) {

    }
  },



  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, search }) => {
      })
    },
  },
};


export default model;