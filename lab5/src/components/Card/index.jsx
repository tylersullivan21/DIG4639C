import React from "react";
import "./index.css";

const Card = props => {
  const { periods } = props;
  return (
   /*met requirements by creating cards by pulling in data from api with period.name, temp,unit, forecast*/
    <div>
      {{ periods }.periods.map((period, index) => (
        <div className="card" key={index}>
          <div className="card-name-section">
            <h2 className="card-name-content">{period.name}</h2>
          </div>
          <div className="temp-section">
            <span className="temp">{period.temperature}</span>
            <span className="temp-unit">{period.temperatureUnit}</span>
          </div>
          <div className="detailedForecast-section">
            <p className="details">{period.detailedForecast}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;