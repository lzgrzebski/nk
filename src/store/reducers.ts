import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import * as homeReducer from '../containers/Home/Home.reducer';
import * as attractionsReducer from '../containers/Attractions/Attractions.reducer';
import * as historyReducer from '../containers/History/History.reducer';
import * as appReducer from '../containers/App/App.reducer';
import * as fromApp from '../containers/App/App.actions';

export enum PageType {
  app = 'app',
  home = 'home',
  attractions = 'attractions',
  history = 'history',
}

export interface State {
  app: appReducer.State;
  home: homeReducer.State;
  attractions: attractionsReducer.State;
  history: historyReducer.State;
}

function globalReducer(state: State, action: fromApp.Actions) {
  switch (action.type) {
    case fromApp.ActionNames.SAVE_TEXT:
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
              id: editedField,
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
    [PageType.home]: homeReducer.reducer,
    [PageType.attractions]: attractionsReducer.reducer,
    [PageType.history]: historyReducer.reducer
  }),
  globalReducer
);

export default rootReducer;