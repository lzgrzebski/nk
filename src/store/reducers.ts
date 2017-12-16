import { combineReducers } from 'redux';
import * as fromHome from '../containers/Home/Home.reducer';

export interface State {
  home: fromHome.State;
}

const rootReducer = combineReducers({
  home: fromHome.reducer
});

export default rootReducer;