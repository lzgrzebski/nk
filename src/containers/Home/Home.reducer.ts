import * as fromHome from './Home.actions';

export interface Text {
    id: string;
    value: string;
}

export interface State {
    headline: Text;
    headlineDescription: Text;
    paragraph1: Text;
}

const initialState: State = {
    headline: {
        id: 'headline',
        value: ''
    },
    headlineDescription: {
        id: 'headlineDescription',
        value: ''
    },
    paragraph1: {
        id: 'paragraph1',
        value: ''
    },
};

export function reducer(state: State = initialState, action: fromHome.Actions): State {
    switch (action.type) {
        case fromHome.ActionNames.FETCH_DATA:
            return state;
        case fromHome.ActionNames.FETCH_DATA_FULFILLED:
            return {...state, ...action.payload};
        default:
            return state;
    }
}