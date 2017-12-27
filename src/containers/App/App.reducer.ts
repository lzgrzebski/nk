import * as fromApp from './App.actions';

export interface State {
    isLoading: boolean;
    isAuth: boolean;
    isEditing: boolean;
    editedField: string;
    editedPage: string;
}

const initialState: State = {
    isLoading: false,
    isAuth: true,
    isEditing: false,
    editedField: '',
    editedPage: '',
};

export function reducer(state: State = initialState, action: fromApp.Actions): State {
    switch (action.type) {
        case fromApp.ActionNames.EDIT_TEXT:
            const { editedPage, editedField } = action;
            return {...state, isEditing: true, editedPage, editedField};
        default:
            return state;
    }
}