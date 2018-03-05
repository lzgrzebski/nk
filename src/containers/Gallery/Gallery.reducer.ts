import * as fromGallery from './Gallery.actions';
import { Photo } from './../Home/Home.reducer';

export interface GalleryCategoryItem {
    name?: string;
    photos: Photo[];
}

export interface State {
    okolica: GalleryCategoryItem[];
    konie: GalleryCategoryItem[];
    wobiektywie: GalleryCategoryItem[];
    przyroda: GalleryCategoryItem[];
}

const initialState: State = {
    okolica: [],
    konie: [],
    wobiektywie: [],
    przyroda: []
};

export function reducer(state: State = initialState, action: fromGallery.Actions): State {
    switch (action.type) {
        case fromGallery.ActionNames.FETCH_DATA:
            return state;
        case fromGallery.ActionNames.FETCH_DATA_FULFILLED:
            return {...state, ...action.payload};
        default:
            return state;
    }
}