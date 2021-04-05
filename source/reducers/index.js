import { combineReducers } from 'redux';
import collection from './CollectionReducer';
import tweet from './TweetReducer';

const reducers = combineReducers({
    collection,
    tweet
});

export default reducers;
