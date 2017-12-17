import { Action } from 'redux';

export const SET_LOADING = '[APP] SET LOADING';
export const EDIT = '[APP] EDIT';
export const SAVE = '[APP] SAVE';
export const SAVE_FULFILLED = '[APP] SAVE FULFILLED';

export const setLoading = (): Action => ({
    type: SET_LOADING
});
