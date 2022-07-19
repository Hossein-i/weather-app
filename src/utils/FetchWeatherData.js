import axios from "axios";
import axiosRetry from "axios-retry";
import moment from "moment-timezone";
import { API, WEATHER_DATA } from "../constants";
import isValid from "./ValidityChecker";

// Exponential back-off retry delay between requests
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay, retries: 1 });

const computedWeatherData = (weatherData) => {
  const timezone = weatherData.location.tz_id;

  let weatherCurrent = {},
    weatherForecast = {},
    alerts = {};

  if (isValid(weatherData)) {
    weatherCurrent = {
      ...weatherData.current,
      ...weatherData.location,
      ...weatherData.forecast.forecastday[0].astro,
      chance_of_rain:
        weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    };

    let days = [];
    let timeframes = [];

    weatherData.forecast.forecastday.forEach((forecast) => {
      days.push({
        ...forecast.day,
        ...weatherData.location,
        date: forecast.date,
      });
      timeframes.push(...forecast.hour);
    });

    days[0] = { ...days[0], is_day: weatherData.current.is_day };

    timeframes = timeframes
      .filter(
        (item) => moment(item.time).format("DD HH") >= moment().format("DD HH")
      )
      .slice(0, 24);

    weatherForecast = { days, timeframes, timezone };
  }

  return {
    weatherCurrent,
    weatherForecast,
    alerts,
  };
};

const FetchWeatherData = async (q, days, sample = true) => {
  let weatherData = null;
  let error = null;

  try {
    if (sample) {
      weatherData = WEATHER_DATA;
    } else if (isValid(q)) {
      weatherData = (
        await axios.get(API.URL + API.FORECAST, {
          params: {
            key: process.env.REACT_APP_API_KEY,
            q,
            days,
          },
        })
      ).data;
    }
  } catch (err) {
    error = err;
    console.error(err);
  }

  return {
    ...computedWeatherData(weatherData),
    error,
  };
};

export default FetchWeatherData;
