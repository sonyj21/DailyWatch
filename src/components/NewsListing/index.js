import React from "react"
import {
    Button, Card, H5
} from "@blueprintjs/core";

const NewsListing = ({topNews}) => {
    return (
        <section>
      {topNews && topNews.length>=0 && topNews.map((news) =>{
          return(
            <Card elevation="4">
            <H5>
                <a href={news.url} target="_blank">{news.title}</a>
            </H5>
            <p>
               {news.description}
            </p>
    </Card>
          )
      })   } 
      <div id="m-booked-vertical-one-prime-46500"> <div className="weather-customize weather-booked-vertical-one-prime" style={{width:160}} >  
      <div className="booked-vertical-prime-in"> <div className="booked-vertical-prime"> <div className="bwop-city">Kottayam</div> <div className="bwop-icon wm18 ">
          </div> <div className="booked-bwop-today"> <div className="booked-bwop-today-temperature">
               <div className="booked-wzs-bwop-val"> <div className="booked-bwop-number"><span className="plus">+</span>30</div>
                <div className="booked-bwop-dergee"> <div className="booked-wzs-bwop-dergee-val">&deg;</div> 
                <div className="booked-wzs-bwop-dergee-name">C</div> </div> </div> </div> <div className="booked-bwop-today-extreme">
                     <div className="booked-bwop booked-pd-h"><span>High:</span><span className="plus">+</span>30</div> 
                     <div className="booked-bwop booked-pd-l"><span>Low:</span><span className="plus">+</span>23</div> 
                     </div> </div> <div className="bwop-state"> Rain </div> </div> 
      </div> </div> </div>
      </section>
    )
}
export default NewsListing