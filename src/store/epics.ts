import { combineEpics } from 'redux-observable';
import { fetchData } from '../containers/Home/Home.epics';

const rootEpic = combineEpics(
    fetchData
);

export default rootEpic;