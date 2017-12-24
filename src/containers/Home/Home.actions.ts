import { State } from './Home.reducer';
import { Action } from 'redux';

export enum ActionNames {
    FETCH_DATA = '[HOME] FETCH DATA',
    FETCH_DATA_FULFILLED = '[HOME] FETCH DATA FULFILLED'
}

export interface FetchDataAction extends Action {
    type: ActionNames.FETCH_DATA;
}

export const fetchData = (): FetchDataAction => ({
    type: ActionNames.FETCH_DATA
});

export interface FetchDataFulfilledAction extends Action {
    type: ActionNames.FETCH_DATA_FULFILLED;
    payload: State;
}

export const fetchDataFulfilled = (payload: State) => ({
    type: ActionNames.FETCH_DATA_FULFILLED,
    payload
});

export type Actions = (
    FetchDataAction |
    FetchDataFulfilledAction
);