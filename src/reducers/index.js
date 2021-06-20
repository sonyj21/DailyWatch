import { combineReducers } from 'redux';
import topHeadLineReducers from './topHeadlineReducers'
import weatherDetailsReducer from './weatherDetailsReducer';

export default combineReducers({ 
    topHeadNews:topHeadLineReducers,
    weatherData:weatherDetailsReducer
})