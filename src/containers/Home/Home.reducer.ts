import * as fromHome from './Home.actions';

export interface Text {
    id: string;
    value: string;
    type?: 'text';
}

export interface Photo {
    id: string;
    path: string;
    width: number;
    height: number;
    description: string;
    type?: 'photo';
}

export interface State {
    headline: Text;
    headlinePhoto: Photo;
    headlineDescription: Text;
    headlineButton: Text;

    photoSectionHeadline: Text;
    photoSectionElement1: Photo;
    photoSectionElement2: Photo;
    photoSectionElement3: Photo;
    photoSectionElement4: Photo;
    photoSectionMoreButton: Text;
}

const initialState: State = {
    headline: {
        id: 'headline',
        value: '',
    },
    headlinePhoto: {
        id: 'headlinePhoto',
        path: '',
        width: 0,
        height: 0,
        description: '',
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
    photoSectionElement1: {
        id: 'photoSectionElement1',
        path: '',
        width: 0,
        height: 0,
        description: '',
    },
    photoSectionElement2: {
        id: 'photoSectionElement2',
        path: '',
        width: 0,
        height: 0,
        description: '',
    },
    photoSectionElement3: {
        id: 'photoSectionElement3',
        path: '',
        width: 0,
        height: 0,
        description: '',
    },
    photoSectionElement4: {
        id: 'photoSectionElement4',
        path: '',
        width: 0,
        height: 0,
        description: '',
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