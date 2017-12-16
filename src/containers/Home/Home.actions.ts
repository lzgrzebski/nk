import { Action } from 'redux';

export const FETCH_DATA = '[HOME] FETCH DATA';
export const FETCH_DATA_FULFILLED = '[HOME] FETCH DATA FULFILLED';

export const fetchData = (): Action => ({
    type: FETCH_DATA
});

// tslint:disable-next-line:no-any
export const fetchDataFulfilled = (payload: any) => ({
    type: FETCH_DATA_FULFILLED,
    payload
});