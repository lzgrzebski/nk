import { Action } from 'redux';

export const FETCH_DATA = '[HOME] FETCH DATA';
export const FETCH_DATA_FULFILLED = '[HOME] FETCH DATA FULFILLED';

export const EDIT_TEXT = '[HOME] EDIT TEXT';
export const SAVE_TEXT = '[HOME] SAVE TEXT';
export const SAVE_TEXT_FULFILLED = '[HOME] SAVE TEXT FULFILLED';

export const fetchData = (): Action => ({
    type: FETCH_DATA
});

// tslint:disable-next-line:no-any
export const fetchDataFulfilled = (payload: any) => ({
    type: FETCH_DATA_FULFILLED,
    payload
});

// tslint:disable-next-line:no-any
export const editText = (id: string) => ({
    type: EDIT_TEXT,
    id
});

// tslint:disable-next-line:no-any
export const saveText = (id: string, text: string) => ({
    type: SAVE_TEXT,
    id,
    text,
});
