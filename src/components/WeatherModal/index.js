import React,{useState} from "react"
import { Alert} from "@blueprintjs/core";
const WeatherModal = ({isWeatherOpen,weatherDetails,handleErrorClose}) =>{
    const {weather,name,main} = weatherDetails
    return(
        <Alert
        isOpen={isWeatherOpen}
        onClose={handleErrorClose}
    >
        <div id="m-booked-vertical-one-prime-46500"> <div className="weather-customize weather-booked-vertical-one-prime" style={{width:160}} >  
      <div className="booked-vertical-prime-in"> <div className="booked-vertical-prime"> <div className="bwop-city">{name}</div>
       <div className="booked-bwop-today"> <div className="booked-bwop-today-temperature">
               <div className="booked-wzs-bwop-val">
                  {main ? (<div className="booked-bwop-number">
                   <span className="plus">+</span>{main.temp.toFixed(1)}</div>):null}  
                <div className="booked-bwop-dergee"> <div className="booked-wzs-bwop-dergee-val">&deg;</div> 
                <div className="booked-wzs-bwop-dergee-name">C</div> </div> </div> </div> <div className="booked-bwop-today-extreme">
                     {/* <div className="booked-bwop booked-pd-h"><span>High:</span><span className="plus">+</span>30</div> 
                     <div className="booked-bwop booked-pd-l"><span>Low:</span><span className="plus">+</span>23</div>  */}
                     </div> </div> {weather && weather.length > 0 ?(<div className="bwop-state"> {weather[0].main} </div> ):null}
                     </div> 
      </div> </div> </div>
    </Alert>
    )
}
export default WeatherModal