import * as fromAttractions from './Attractions.actions';

export interface Text {
    id: string;
    value: string;
}

export interface Attraction {
    title: string;
    description?: string;
    image: string;
    link?: string;
}

export interface Plans {
    title: string;
    description: string;
    points: string[];
}

export interface State {
    attractions: Attraction[];
    plans: Plans;
    otherAttractionsTitle: string;
    otherAttractions: Attraction[];
}

const initialState: State = {
    attractions: [],
    plans: {
        title: '',
        description: '',
        points: []
    },
    otherAttractionsTitle: '',
    otherAttractions: [],

};

export function reducer(state: State = initialState, action: fromAttractions.Actions): State {
    switch (action.type) {
        case fromAttractions.ActionNames.FETCH_DATA:
            return state;
        case fromAttractions.ActionNames.FETCH_DATA_FULFILLED:
            return {...state, ...action.payload};
        default:
            return state;
    }
}