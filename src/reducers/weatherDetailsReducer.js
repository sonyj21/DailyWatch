import {FETCH_WEATHER_DETAILS} from '../actions/types';

const INTIAL_STATE = {
    weatherDetails:[]
};

export default (state = INTIAL_STATE,action) => {
    switch(action.type){
        case FETCH_WEATHER_DETAILS:
            return {
                ...state,
                weatherDetails:action.payload
            };
        default:
            return state;
    }
}