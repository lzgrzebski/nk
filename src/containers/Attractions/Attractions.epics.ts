import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as fromAttractions from './Attractions.actions';
import { State } from './Attractions.reducer';

export const fetchData = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$
        .ofType(fromAttractions.ActionNames.FETCH_DATA)
        .mergeMap(action =>
            ajax.getJSON(`${process.env.PUBLIC_URL}/mock/Attractions.data.mock.json`)
                .map((response: State) => fromAttractions.fetchDataFulfilled(response))
        );