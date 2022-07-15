import { useState, useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import { MdNavigateBefore } from "react-icons/md";
import HeaderComponent from "../../components/header";
import InputSearchComponent from "../../components/search/input-search";

const ManageCitiesContainer = () => {
  const { listCities } = useContext(AddressContext);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="animation-fade">
      <HeaderComponent
        title="Manage Cities"
        btnLeft={{
          icon: <MdNavigateBefore />,
          onClick: () => window.history.back(),
        }}
      />
      <InputSearchComponent />
    </div>
  );
};

export default ManageCitiesContainer;
