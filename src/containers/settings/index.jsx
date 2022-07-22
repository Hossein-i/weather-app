import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { WeatherUnitContext } from "../../contexts/WeatherUnitContext";
import { MdNavigateBefore } from "react-icons/md";
import ToggleSwitch from "../../components/toggle-switch";
import SelectBox from "../../components/select-box";
import HeaderComponent from "../../components/header";

const SettingsContainer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { tempUnit, pressureUnit, windSpeedUnit, updateWeatherUnit } =
    useContext(WeatherUnitContext);

  return (
    <div className="settings animation-fade">
      <HeaderComponent
        title="Settings"
        btnLeft={{
          icon: <MdNavigateBefore />,
          onClick: () => {
            window.history.back();
            window.history.back();
          },
        }}
      />
      <div>
        <ToggleSwitch
          label="Dark Mode"
          checked={theme === "dark" ? true : false}
          onChange={toggleTheme}
        />
        <SelectBox
          label="Temperature Units"
          labelLocal="tempUnit"
          value={tempUnit}
          options={["°C", "°F"]}
          onSelect={updateWeatherUnit}
        />
        <SelectBox
          label="Wind Speed Units"
          labelLocal="windSpeedUnit"
          value={windSpeedUnit}
          options={["km/h", "mph"]}
          onSelect={updateWeatherUnit}
        />
        <SelectBox
          label="Pressure Unit"
          labelLocal="pressureUnit"
          value={pressureUnit}
          options={["mbar", "inHg"]}
          onSelect={updateWeatherUnit}
        />
      </div>
    </div>
  );
};

export default SettingsContainer;
