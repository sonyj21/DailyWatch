import React,{useEffect} from "react"
import Nav from '../../components/Navbar'
import NewsListing from '../../components/NewsListing'
import {FetchTopHeadLines} from '../../actions/topHeadlines'
import { connect } from "react-redux";
const Home = ({FetchTopHeadLines,topNews}) =>{
   
    useEffect(()=>{
        FetchTopHeadLines();
    },[])
    console.log("ooooooooooooooooooooooooo",topNews)
    return(
        <>
        <Nav />
        <br />
        <NewsListing topNews={topNews} />
        </>
    )
}
const mapStateToProps = (state) => {
    return { topNews: state.topHeadNews.topHeadLines };
  };
  
export default connect(mapStateToProps, { FetchTopHeadLines })(Home);
