import { useContext } from "react";
import { MdAdd, MdCheck, MdClose } from "react-icons/md";
import { AddressContext } from "../../../contexts/AddressContext";
import { WeatherUnitContext } from "../../../contexts/WeatherUnitContext";
import { getWeatherIcon } from "../../../utils/WeatherIcon";
import "./style.scss";

const ItemComponent = ({ item }) => {
  const {
    currentCity,
    listCities,
    updateCurrentCity,
    removeListCities,
    addListCities,
  } = useContext(AddressContext);
  const { tempUnit } = useContext(WeatherUnitContext);
  const {
    name,
    country,
    condition: { code },
    is_day,
    temp_c,
    temp_f,
  } = item;

  const handleUpdateCity = () => updateCurrentCity(name);
  const handleRemoveCity = () => removeListCities(name);
  const handleAddCity = () => addListCities(name);

  return (
    <div className={`item ${currentCity === name && "active"}`}>
      <div onClick={handleUpdateCity}>
        <div className="item__city">{name}</div>
        <div className="item__country">{country}</div>
      </div>
      <div onClick={handleUpdateCity}>
        <div className="item__icon">{getWeatherIcon(code, is_day)}</div>
        <div className="item__temp">
          {(tempUnit === "°C" ? temp_c : temp_f).toFixed() + tempUnit}
        </div>
      </div>
      <div className="item__wrapper-btn">
        {currentCity === name ? (
          <button className="item__btn">
            <MdCheck />
          </button>
        ) : (
          <>
            {listCities.includes(name) ? (
              <button className="item__btn" onClick={handleRemoveCity}>
                <MdClose />
              </button>
            ) : (
              <button className="item__btn" onClick={handleAddCity}>
                <MdAdd />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ItemComponent;
