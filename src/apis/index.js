import axios from 'axios';



const gnewsApi = axios.create({
    baseURL:`${process.env.REACT_APP_GNEWS_APIURL}`,
});

export const weatherApi = axios.create({
    baseURL:`${process.env.REACT_APP_WEATHER_APIURL}`,
});
export default gnewsApi;