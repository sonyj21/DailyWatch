import React,{useCallback, useEffect,useState} from "react"
import Nav from '../../components/Navbar'
import NewsListing from '../../components/NewsListing'
import WeatherModal from '../../components/WeatherModal'
import {FetchTopHeadLines} from '../../actions/topHeadlines'
import {FetchWeatherDetails} from '../../actions/weatherDetails'
import { connect } from "react-redux";
const Home = ({FetchTopHeadLines,FetchWeatherDetails,topNews,weatherDetails}) =>{
    const [isWeatherOpen,setWeatherOPen] = useState(false)
    useEffect(()=>{
        FetchTopHeadLines();
        FetchWeatherDetails()
    },[])
    const weatherClick= useCallback(()=>{
        setWeatherOPen(true)
    },[])
    const handleErrorClose= useCallback(()=>{
        setWeatherOPen(false)
    },[])
    
    return(
        <>
        <Nav weatherClick={weatherClick} />
        <br />
        <NewsListing topNews={topNews}  />
        <WeatherModal isWeatherOpen={isWeatherOpen} weatherDetails={weatherDetails} handleErrorClose={handleErrorClose} />
        </>
    )
}
const mapStateToProps = (state) => {
    return { topNews: state.topHeadNews.topHeadLines,weatherDetails:state.weatherData.weatherDetails };
  };
  
export default connect(mapStateToProps, { FetchTopHeadLines,FetchWeatherDetails })(Home);
