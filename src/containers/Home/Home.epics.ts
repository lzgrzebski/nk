import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as fromHome from './Home.actions';
import { State } from './Home.reducer';

export const fetchData = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$
        .ofType(fromHome.ActionNames.FETCH_DATA)
        .mergeMap(action =>
            ajax.getJSON(`${process.env.PUBLIC_URL}/mock/Home.data.mock.json`)
                .map((response: State) => fromHome.fetchDataFulfilled(response))
        );