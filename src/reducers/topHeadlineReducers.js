import {TOP_HEAD_LINES} from '../actions/types';

const INTIAL_STATE = {
    topHeadLines:[]
};

export default (state = INTIAL_STATE,action) => {
    switch(action.type){
        case TOP_HEAD_LINES:
            return {
                ...state,
                topHeadLines:action.payload
            };
        default:
            return state;
    }
}