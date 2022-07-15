import { useContext } from "react";
import { WeatherUnitContext } from "../../../contexts/WeatherUnitContext";
import FormatTime from "../../../utils/FormatTime";
import { getWeatherIcon } from "../../../utils/WeatherIcon";

import "./style.scss";

const InfoComponent = ({ weatherCurrent }) => {
  const { tempUnit } = useContext(WeatherUnitContext);
  const {
    condition: { code, text },
    is_day,
    temp_c,
    temp_f,
    localtime_epoch,
    tz_id,
  } = weatherCurrent;

  return (
    <div className="info">
      <span className="info__icon">{getWeatherIcon(code, is_day)}</span>
      <span className="info__temp">
        {(tempUnit === "°C" ? temp_c : temp_f).toFixed() + tempUnit}
      </span>
      <span className="info__text">{text}</span>
      <span className="info__time">
        {FormatTime(localtime_epoch, tz_id, "ddd, D MMM YYYY")}
      </span>
    </div>
  );
};

export default InfoComponent;
