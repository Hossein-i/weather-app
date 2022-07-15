import { isNil } from "lodash-es";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd, MdSettings } from "react-icons/md";
import HeaderComponent from "../../components/header";
import { AddressContext } from "../../contexts/AddressContext";
import FetchWeatherData from "../../utils/FetchWeatherData";
import isValid from "../../utils/ValidityChecker";
import WeatherForecastContainer from "../weather-forecast";

const WeatherContainer = () => {
  const { currentCity } = useContext(AddressContext);
  const [weatherCurrent, setWeatherCurrent] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});
  // const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const setWeatherData = (current, forecast, alerts) => {
    if (isValid(current) && isValid(forecast)) {
      setWeatherCurrent(current);
      setWeatherForecast(forecast);
      // setAlerts(alerts);
    }
  };
  const fetchWeatherData = async (sample = false) => {
    try {
      setIsLoading(true);
      const { weatherCurrent, weatherForecast, alerts, error } =
        await FetchWeatherData(currentCity, 3, sample);

      if (isNil(error)) {
        setWeatherData(weatherCurrent, weatherForecast, alerts);

        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isValid(currentCity)) {
      fetchWeatherData();
    } else {
      setIsError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          {isError ? (
            <></>
          ) : (
            <>
              <HeaderComponent
                title={weatherCurrent.name}
                subtitle={weatherCurrent.country}
                btnLeft={{
                  icon: <MdAdd />,
                  onClick: () => navigate("./manage-cities"),
                }}
                btnRight={{
                  icon: <MdSettings />,
                  onClick: () => navigate("./settings"),
                }}
              />
              <WeatherForecastContainer
                weatherCurrent={weatherCurrent}
                weatherForecast={weatherForecast}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default WeatherContainer;
