
export interface ReduxAction {
    type: string
    [propName: string]: any,
}

export interface ReduxSagaEffect {
    put: any,
    call: any,
    select: any,
}

export interface DvaModelReducer {
    [reducerName: string]: (preState: object, action: ReduxAction) => object
}

export interface DvaModelEffectFn {
    (action: ReduxAction, sagaEffects: ReduxSagaEffect): any
}

export interface ReduxSagaTake {
    type: string
    [propsName: string]: any
}
// problem
export interface DvaModelEffectWithTake {
    1: DvaModelEffectFn
    [index: number]: any | ReduxSagaTake
}

export interface DvaModelEffect {
    [effectName: string]: DvaModelEffectFn | DvaModelEffectWithTake
}

export interface DvaModel {
    namespace: string,
    state?: object,
    reducers?: DvaModelReducer,
    effects?: DvaModelEffect,
    subscriptions?: object
}