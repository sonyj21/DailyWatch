import {TOP_HEAD_LINES} from './types'
import gnewsapi from '../apis'
import thunk from 'redux-thunk'

export const FetchTopHeadLines = () => (dispatch) =>   {
      gnewsapi.get('/top-headlines?token='+process.env.REACT_APP_GNEWS_TOKEN+'&lang=ml').then((response) =>{
      dispatch({type:TOP_HEAD_LINES,payload:response.data.articles})
})
}