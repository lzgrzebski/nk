import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as fromHistory from './History.actions';
import { State } from './History.reducer';

export const fetchData = (action$: ActionsObservable<Action>): Observable<Action> =>
    action$
        .ofType(fromHistory.ActionNames.FETCH_DATA)
        .mergeMap(action =>
            ajax.getJSON(`${process.env.PUBLIC_URL}/mock/History.data.mock.json`)
                .map((response: State) => fromHistory.fetchDataFulfilled(response))
        );