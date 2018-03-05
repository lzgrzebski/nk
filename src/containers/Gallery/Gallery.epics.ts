import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as fromGallery from './Gallery.actions';
import { State } from './Gallery.reducer';

export const fetchData = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$
        .ofType(fromGallery.ActionNames.FETCH_DATA)
        .mergeMap(action =>
            ajax.getJSON(`${process.env.PUBLIC_URL}/mock/Gallery.data.mock.json`)
                .map((response: State) => fromGallery.fetchDataFulfilled(response))
        );