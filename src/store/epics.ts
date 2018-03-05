import { combineEpics } from 'redux-observable';
import { fetchData as fetchHomeData } from '../containers/Home/Home.epics';
import { fetchData as fetchAttractionsData } from '../containers/Attractions/Attractions.epics';
import { fetchData as fetchHistoryData } from '../containers/History/History.epics';
import { fetchData as fetchGalleryData } from '../containers/Gallery/Gallery.epics';

const rootEpic = combineEpics(
    fetchHomeData,
    fetchAttractionsData,
    fetchHistoryData,
    fetchGalleryData
);

export default rootEpic;