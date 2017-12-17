import * as fromHome from './Home.actions';

export interface State {
    headline: string;
    headlineDescription: string;
    paragraph1: string;

    isLoading: boolean;
    isEditing: boolean;
    editedField: string;
}

const initialState: State = {
    headline: '',
    headlineDescription: '',
    paragraph1: '',

    isLoading: false,
    isEditing: false,
    editedField: '',
};

// tslint:disable-next-line:no-any
export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case fromHome.FETCH_DATA:
            return state;
        case fromHome.FETCH_DATA_FULFILLED:
            return {...state, ...action.payload};
        case fromHome.EDIT_TEXT:
            return {...state, isEditing: true, editedField: action.id};
        case fromHome.SAVE_TEXT:
            return {...state, isEditing: false, editedField: '', [action.id]: action.text};
        default:
            return state;
    }
}