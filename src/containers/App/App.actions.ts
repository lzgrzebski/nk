import { Action } from 'redux';

export enum ActionNames {
    SET_LOADING = '[APP] SET LOADING',
    EDIT_TEXT = '[APP] EDIT TEXT',
    SAVE_TEXT = '[APP] SAVE TEXT',
    SAVE_TEXT_FULFILLED = '[APP] SAVE TEXT FULFILLED' 
}

export interface SetLoadingAction extends Action {
    type: ActionNames.SET_LOADING;
}

export const setLoading = (): SetLoadingAction => ({
    type: ActionNames.SET_LOADING
});

export interface EditTextAction extends Action {
    type: ActionNames.EDIT_TEXT;
    editedPage: string;
    editedField: string;
}

export const editText = (editedPage: string, editedField: string): EditTextAction => ({
    type: ActionNames.EDIT_TEXT,
    editedPage,
    editedField,
});

export interface SaveTextAction extends Action {
    type: ActionNames.SAVE_TEXT;
    editedPage: string;
    editedField: string;
    text: string;   
} 

export const saveText = (editedPage: string, editedField: string, text: string): SaveTextAction => ({
    type: ActionNames.SAVE_TEXT,
    editedPage,
    editedField,
    text
});

export type Actions = (
    SetLoadingAction |
    EditTextAction |
    SaveTextAction
);
