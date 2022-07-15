import React, { useEffect, useState } from "react";

const AddressContext = React.createContext({
  currentCity: "",
  listCities: [""],
  updateCurrentCity: () => {},
  addListCities: () => {},
  removeListCities: () => {},
});

const AddressContextProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Dezful");
  const [listCities, setListCities] = useState(["Dezful", "Tehran", "Mashhad"]);

  const updateCurrentCity = (city) => {
    setCurrentCity(city);
    localStorage.setItem("current-city", city);
  };
  const addListCities = (city) => {
    if (listCities.every((item) => item !== city)) {
      let newList = [...listCities, city];
      setListCities(newList);
      localStorage.setItem("list-cities", JSON.stringify(newList));
    }
  };
  const removeListCities = (city) => {
    let filteredList = listCities.filter((item) => item !== city);
    setListCities(filteredList);
    localStorage.setItem("list-cities", JSON.stringify(filteredList));
  };

  useEffect(() => {
    if (!localStorage.getItem("current-city")) {
      localStorage.setItem("current-city", currentCity);
    } else {
      setCurrentCity(localStorage.getItem("current-city"));
    }

    if (!localStorage.getItem("list-cities")) {
      localStorage.setItem("list-cities", JSON.stringify(listCities));
    } else {
      setListCities(JSON.parse(localStorage.getItem("list-cities")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AddressContext.Provider
      value={{
        currentCity,
        listCities,
        updateCurrentCity,
        addListCities,
        removeListCities,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressContextProvider };
