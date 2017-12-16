import * as fromHome from './Home.actions';

export interface State {
    elements: string[];
}

const initialState: State = {
    elements: []
};

// tslint:disable-next-line:no-any
export function reducer(state: State = initialState, action: any): State {
    switch (action.type) {
        case fromHome.FETCH_DATA:
            return state;
        case fromHome.FETCH_DATA_FULFILLED:
            return {...state, elements: action.payload.elements};
        default:
            return state;
    }
}