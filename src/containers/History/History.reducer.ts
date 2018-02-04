import { Text, Photo } from './../Home/Home.reducer';

import * as fromHistory from './History.actions';

export interface State {
    historyArray: Array<Text | Photo>;
}

const initialState: State = {
    historyArray: [],
};

export function reducer(state: State = initialState, action: fromHistory.Actions): State {
    switch (action.type) {
        case fromHistory.ActionNames.FETCH_DATA:
            return state;
        case fromHistory.ActionNames.FETCH_DATA_FULFILLED:
            return {...state, ...action.payload};
        default:
            return state;
    }
}