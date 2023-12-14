import React from "react";

const Weather = ()=>{

    let weatherInput = {temperature: 25, conditions: "Sunny"};

    function getTemperature(temp){
        if(temp>20){
            return <span className="red">{temp}</span>
        }else{
            return <span className="blue">{temp}</span>
        }
    }

    return(
        <div>
            <p>temperature: {getTemperature(weatherInput.temperature)}</p>
            <p>conditions: {weatherInput.conditions}</p>
        </div>
    )
}
export default Weather;

