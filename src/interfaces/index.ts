
export interface ReduxAction {
    type: string
    [propName: string]: any,
}

export interface ReduxSagaEffects {
    put: any,
    call: any,
    select: any,
}

export interface DvaModelReducer {
    (preState: object, action: ReduxAction): object
}

export interface DvaModelReducers {
    [reducerName: string]: DvaModelReducer
}

export interface DvaModelEffectFn {
    (action: ReduxAction, sagaEffects: ReduxSagaEffects): any
}

export interface ReduxSagaTaker {
    type: string
    [propsName: string]: any
}
// problem
export interface DvaModelEffectWithTaker extends Array<any> {
    [index: number]: ReduxSagaTaker | DvaModelEffectFn,
}

export type DvaModelEffect = DvaModelEffectFn | DvaModelEffectWithTaker

export interface DvaModelEffects {
    [effectName: string]: DvaModelEffect
}

export interface DvaModel {
    namespace: string,
    state?: object,
    reducers?: DvaModelReducers,
    effects?: DvaModelEffects,
    subscriptions?: object
}