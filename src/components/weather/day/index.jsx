import moment from "moment-timezone";
import { useContext } from "react";
import { WeatherUnitContext } from "../../../contexts/WeatherUnitContext";
import { getWeatherIcon } from "../../../utils/WeatherIcon";
import "./style.scss";

const DayComponent = ({ day }) => {
  const { tempUnit } = useContext(WeatherUnitContext);
  const {
    condition: { code, text },
    is_day,
    date,
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
  } = day;

  return (
    <div
      className={`day ${
        moment().format("MM DD") === moment(date).format("MM DD") && "active"
      }`}
    >
      <div className="day__left">
        <span className="day__icon">
          {is_day === 0
            ? getWeatherIcon(code, is_day)
            : getWeatherIcon(code, 1)}
        </span>
        <span className="day__date">
          {moment().format("MM DD") === moment(date).format("MM DD")
            ? "Today"
            : moment(date).format("ddd")}
        </span>
        <span className="day__text"> . {text}</span>
      </div>
      <div className="day__right">
        <span className="day__temp">
          {(tempUnit === "°C" ? maxtemp_c : maxtemp_f).toFixed() + "°"}
          {" / "}
          {(tempUnit === "°C" ? mintemp_c : mintemp_f).toFixed() + "°"}
        </span>
      </div>
    </div>
  );
};

export default DayComponent;
