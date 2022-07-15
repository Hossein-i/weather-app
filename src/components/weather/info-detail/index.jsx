import { useContext } from "react";
import { WeatherUnitContext } from "../../../contexts/WeatherUnitContext";
import "./style.scss";

const InfoDetailComponent = ({ weatherCurrent }) => {
  const { tempUnit, pressureUnit, windSpeedUnit } =
    useContext(WeatherUnitContext);
  const {
    sunrise,
    sunset,
    feelslike_c,
    feelslike_f,
    humidity,
    chance_of_rain,
    pressure_mb,
    pressure_in,
    wind_kph,
    wind_mph,
    uv,
  } = weatherCurrent;

  return (
    <div className="info-detail">
      <div className="info-detail__item">
        <span className="info-detail__title">Sunrise</span>
        <span className="info-detail__value">{sunrise}</span>
      </div>
      <div className="info-detail__item">
        <span className="info-detail__title">Senset</span>
        <span className="info-detail__value">{sunset}</span>
      </div>
      <div className="info-detail__item">
        <span className="info-detail__title">Real feel</span>
        <span className="info-detail__value">
          {(tempUnit === "°C" ? feelslike_c : feelslike_f) + tempUnit}
        </span>
      </div>
      <div className="info-detail__item">
        <span className="info-detail__title">Humidity</span>
        <span className="info-detail__value">{humidity}%</span>
      </div>
      <div className="info-detail__item">
        <span className="info-detail__title">Chance of rain</span>
        <span className="info-detail__value">{chance_of_rain}%</span>
      </div>
      <div className="info-detail__item">
        <span className="info-detail__title">Pressure</span>
        <span className="info-detail__value">
          {(pressureUnit === "mbar" ? pressure_mb : pressure_in) + pressureUnit}
        </span>
      </div>
      <div className="info-detail__item">
        <span className="info-detail__title">Wind speed</span>
        <span className="info-detail__value">
          {(windSpeedUnit === "km/h" ? wind_kph : wind_mph) + windSpeedUnit}
        </span>
      </div>
      <div className="info-detail__item">
        <span className="info-detail__title">UV index</span>
        <span className="info-detail__value">{uv}</span>
      </div>
    </div>
  );
};

export default InfoDetailComponent;
