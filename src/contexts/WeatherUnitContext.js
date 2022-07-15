import React, { useState, useEffect } from "react";

const WeatherUnitContext = React.createContext({
  tempUnit: "",
  windSpeedUnit: "",
  pressureUnit: "",
  updateWeatherUnit: () => {},
});

const WeatherUnitContextProvider = ({ children }) => {
  const [tempUnit, setTempUnit] = useState("°C");
  const [windSpeedUnit, setWindSpeedUnit] = useState("km/h");
  const [pressureUnit, setPressureUnit] = useState("mbar");

  const updateWeatherUnit = (unit, value) => {
    switch (unit) {
      case "tempUnit":
        setTempUnit(value);
        break;
      case "windSpeedUnit":
        setWindSpeedUnit(value);
        break;
      case "pressureUnit":
        setPressureUnit(value);
        break;
      default:
        break;
    }
    localStorage.setItem(unit, value);
  };
  const checkLocalStorage = (unit, value) => {
    if (!localStorage.getItem(unit)) {
      localStorage.setItem(unit, value);
    } else {
      switch (unit) {
        case "tempUnit":
          setTempUnit(localStorage.getItem(unit));
          break;
        case "windSpeedUnit":
          setWindSpeedUnit(localStorage.getItem(unit));
          break;
        case "pressureUnit":
          setPressureUnit(localStorage.getItem(unit));
          break;
        default:
          break;
      }
    }
  };
  useEffect(() => {
    checkLocalStorage("tempUnit", tempUnit);
    checkLocalStorage("windSpeedUnit", windSpeedUnit);
    checkLocalStorage("pressureUnit", pressureUnit);
  }, [pressureUnit, tempUnit, windSpeedUnit]);

  return (
    <WeatherUnitContext.Provider
      value={{ tempUnit, windSpeedUnit, pressureUnit, updateWeatherUnit }}
    >
      {children}
    </WeatherUnitContext.Provider>
  );
};

export { WeatherUnitContext, WeatherUnitContextProvider };
