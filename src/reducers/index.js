import { combineReducers } from 'redux';
import topHeadLineReducers from './topHeadlineReducers'

export default combineReducers({ 
    topHeadNews:topHeadLineReducers
})