import * as fromHome from './Home.actions';

export interface Text {
    key: string;
    value: string;
}

export interface State {
    headline: Text;
    headlineDescription: Text;
    paragraph1: Text;
}

const initialState: State = {
    headline: {
        key: 'headline',
        value: ''
    },
    headlineDescription: {
        key: 'headlineDescription',
        value: ''
    },
    paragraph1: {
        key: 'paragraph1',
        value: ''
    },
};

// tslint:disable-next-line:no-any
export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case fromHome.FETCH_DATA:
            return state;
        case fromHome.FETCH_DATA_FULFILLED:
            return {...state, ...action.payload};
        default:
            return state;
    }
}