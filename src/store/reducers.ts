import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import * as homeReducer from '../containers/Home/Home.reducer';
import * as appReducer from '../containers/App/App.reducer';
import * as fromApp from '../containers/App/App.actions';

export enum PageType {
  app = 'app',
  home = 'home',
}

export interface State {
  app: appReducer.State;
  home: homeReducer.State;
}

  // tslint:disable-next-line:no-any
function globalReducer(state: State, action: any) {
  switch (action.type) {
    case fromApp.SAVE_TEXT:
        const { editedPage, editedField, text } = action;
        return {
          ...state,
          [PageType.app]: {
            ...state[PageType.app],
            isEditing: false,
            editedField: '',
            editedPage: '',
          },
          [editedPage]: {
            ...state[editedPage],
            [editedField]: {
              ...state[editedPage][editedField],
              key: editedField,
              value:  text 
            }
          }};
    default:
        return state;
  }
}

const rootReducer = reduceReducers(
  combineReducers({
    [PageType.app]: appReducer.reducer,
    [PageType.home]: homeReducer.reducer
  }),
  globalReducer
);

export default rootReducer;