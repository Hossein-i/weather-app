import { useContext, useState, useEffect } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import { MdNavigateBefore } from "react-icons/md";
import HeaderComponent from "../../components/header";
import InputSearchComponent from "../../components/input-search";
import FetchWeatherData from "../../utils/FetchWeatherData";
import isValid from "../../utils/ValidityChecker";
import ListComponent from "../../components/search/list";
import { isNil } from "lodash-es";

const ManageCitiesContainer = () => {
  const { listCities } = useContext(AddressContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOnChange = async (value) => {
    if (isValid(value)) {
      const cityData = await fetchCity(value);
      setData([cityData]);
    }
  };

  const fetchCity = async (q) => {
    try {
      setIsLoading(true);
      const { weatherCurrent, error } = await FetchWeatherData(q, 1, false);

      if (isNil(error)) {
        setIsError(false);
        return weatherCurrent;
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchCities = async () => {
    const citiesData = await Promise.all(listCities.map(fetchCity));
    setData(citiesData);
  };

  useEffect(() => {
    if (isValid(listCities)) {
      fetchCities();
    } else {
      setIsError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCities]);

  return (
    <div className="animation-fade">
      <HeaderComponent
        title="Manage Cities"
        btnLeft={{
          icon: <MdNavigateBefore />,
          onClick: () => window.history.back(),
        }}
      />
      <InputSearchComponent onChange={handleOnChange}/>
      {isLoading ? (
        <></>
      ) : (
        data && <>{isError ? <></> : <ListComponent list={data} />}</>
      )}
    </div>
  );
};

export default ManageCitiesContainer;
