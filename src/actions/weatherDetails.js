import {FETCH_WEATHER_DETAILS} from './types'
import {weatherApi} from '../apis'
import thunk from 'redux-thunk'

export const FetchWeatherDetails = () => (dispatch) =>   {
    const location = window.navigator && window.navigator.geolocation;
    if(location){
        location.getCurrentPosition(
            (position) => {
                weatherApi.get('weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid='+process.env.REACT_APP_WEATHER_TOKEN+'&units=metric').then((response) =>{
                    dispatch({type:FETCH_WEATHER_DETAILS,payload:response.data})
              })
            })
    }
    else{
        weatherApi.get('weather?lat=9.791195&lon=76.585490&appid='+process.env.REACT_APP_WEATHER_TOKEN+'&units=metric').then((response) =>{
            dispatch({type:FETCH_WEATHER_DETAILS,payload:response.data})
        })
    }

 
}