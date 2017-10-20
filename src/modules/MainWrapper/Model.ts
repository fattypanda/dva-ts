

import { NAMESPACE } from './ConstConfig'
import { DvaModel } from 'interfaces/index';

const model: DvaModel = {

    namespace: NAMESPACE,

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {
        },
    },

    effects: {

    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};


export default model;