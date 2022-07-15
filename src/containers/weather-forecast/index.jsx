import InfoComponent from "../../components/weather/info";
import InfoDetailComponent from "../../components/weather/info-detail";
import ForecastContainer from "../forecast";

const WeatherForecastContainer = ({ weatherCurrent, weatherForecast }) => {
  return (
    <>
      <InfoComponent weatherCurrent={weatherCurrent} />
      <ForecastContainer weatherForecast={weatherForecast} />
      <InfoDetailComponent weatherCurrent={weatherCurrent} />
    </>
  );
};

export default WeatherForecastContainer;
