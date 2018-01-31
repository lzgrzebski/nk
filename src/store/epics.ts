import { combineEpics } from 'redux-observable';
import { fetchData as fetchHomeData } from '../containers/Home/Home.epics';
import { fetchData as fetchAttractionsData } from '../containers/Attractions/Attractions.epics';

const rootEpic = combineEpics(
    fetchHomeData,
    fetchAttractionsData
);

export default rootEpic;