import * as fromApp from './App.actions';

export interface State {
    isLoading: boolean;
    isEditing: boolean;
    editedField: string;
    editedPage: string;
}

const initialState: State = {
    isLoading: false,
    isEditing: false,
    editedField: '',
    editedPage: '',
};

// tslint:disable-next-line:no-any
export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case fromApp.EDIT_TEXT:
            const { editedPage, editedField } = action;
            return {...state, isEditing: true, editedPage, editedField};
        default:
            return state;
    }
}