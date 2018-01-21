import * as fromHome from './Home.actions';

export interface Text {
    id: string;
    value: string;
}

export interface State {
    headline: Text;
    headlineDescription: Text;
    headlineButton: Text;

    photoSectionHeadline: Text;
    photoSectionMoreButton: Text;
}

const initialState: State = {
    headline: {
        id: 'headline',
        value: '',
    },
    headlineDescription: {
        id: 'headlineDescription',
        value: ''
    },
    headlineButton: {
        id: 'headlineButton',
        value: ''
    },
    
    photoSectionHeadline: {
        id: 'photoSectionHeadline',
        value: ''
    },
    photoSectionMoreButton: {
        id: 'photoSectionMoreButton',
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