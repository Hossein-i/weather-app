import { useRef } from "react";
import "./style.scss";

const InputSearchComponent = ({ onChange }) => {
  const inputEl = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = () => {
    onChange(inputEl.current.value);
  };
  const handleOnBlur = () => {
    inputEl.current.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit} className="input-search">
      <label className="input-search__wrapper">
        <input
          ref={inputEl}
          type="search"
          placeholder="Search"
          className="input-search__input"
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <span className="input-search__label">Search</span>
      </label>
    </form>
  );
};

export default InputSearchComponent;
