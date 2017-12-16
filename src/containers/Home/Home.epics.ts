import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as fromHome from './Home.actions';

export const fetchData = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$
        .ofType(fromHome.FETCH_DATA)
        .mergeMap(action =>
            ajax.getJSON('mock/Home.data.mock.json')
                .map(response => fromHome.fetchDataFulfilled(response))
        );