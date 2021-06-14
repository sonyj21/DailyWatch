import axios from 'axios';



const gnewsApi = axios.create({
    baseURL:`${process.env.REACT_APP_GNEWS_APIURL}`,
});

export default gnewsApi;