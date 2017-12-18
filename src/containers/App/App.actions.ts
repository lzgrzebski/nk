import { Action } from 'redux';

export const SET_LOADING = '[APP] SET LOADING';
export const EDIT_TEXT = '[APP] EDIT TEXT';
export const SAVE_TEXT = '[APP] SAVE TEXT';
export const SAVE_TEXT_FULFILLED = '[APP] SAVE TEXT FULFILLED';

export const setLoading = (): Action => ({
    type: SET_LOADING
});

export const editText = (editedPage: string, editedField: string) => ({
    type: EDIT_TEXT,
    editedPage,
    editedField,
});

export const saveText = (editedPage: string, editedField: string, text: string) => ({
    type: SAVE_TEXT,
    editedPage,
    editedField,
    text
});