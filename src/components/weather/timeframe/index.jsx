import moment from "moment-timezone";
import { useContext } from "react";
import { MdNavigation } from "react-icons/md";
import { WeatherUnitContext } from "../../../contexts/WeatherUnitContext";
import FormatTime from "../../../utils/FormatTime";
import { getWeatherIcon } from "../../../utils/WeatherIcon";
import getWindDirection from "../../../utils/WindDirection";
import "./style.scss";

const TimeframeComponent = ({ timeframe }) => {
  const { tempUnit, windSpeedUnit } = useContext(WeatherUnitContext);
  const {
    timeframe: {
      time,
      time_epoch,
      temp_c,
      temp_f,
      condition: { code },
      is_day,
      wind_kph,
      wind_mph,
      wind_degree,
    },
    timezone,
  } = timeframe;

  return (
    <div
      className={`timeframe ${
        moment().format("DD HH") === moment(time).format("DD HH") && "active"
      }`}
    >
      <span className="timeframe__time">
        {moment().format("DD HH") === moment(time).format("DD HH")
          ? "Now"
          : FormatTime(time_epoch, timezone, "HH:00")}
      </span>
      <span className="timeframe__temp">
        {(tempUnit === "°C" ? temp_c : temp_f).toFixed() + "°"}
      </span>
      <span className="timeframe__icon">{getWeatherIcon(code, is_day)}</span>
      <span className="timeframe__wind">
        <span className={`timeframe__${getWindDirection(wind_degree + 90)}`}>
          <MdNavigation />
        </span>
        <span>{windSpeedUnit === "km/h" ? wind_kph : wind_mph}</span>
        <span>{windSpeedUnit}</span>
      </span>
    </div>
  );
};

export default TimeframeComponent;
