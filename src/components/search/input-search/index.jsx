import "./style.scss";

const InputSearchComponent = ({}) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit} className="input-search">
      <label className="input-search__wrapper">
        <input
          type="search"
          placeholder="Search"
          className="input-search__input"
        />
        <span className="input-search__label">Search</span>
      </label>
    </form>
  );
};

export default InputSearchComponent;
