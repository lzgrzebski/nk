import { combineEpics } from 'redux-observable';
import { fetchData as fetchHomeData } from '../containers/Home/Home.epics';
import { fetchData as fetchAttractionsData } from '../containers/Attractions/Attractions.epics';
import { fetchData as fetchHistoryData } from '../containers/History/History.epics';

const rootEpic = combineEpics(
    fetchHomeData,
    fetchAttractionsData,
    fetchHistoryData
);

export default rootEpic;