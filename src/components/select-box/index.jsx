import { useState } from "react";
import { MdCheck } from "react-icons/md";
import "./style.scss";

const SelectBox = ({ label, labelLocal, value, options, onSelect }) => {
  const [isVisibile, setIsVisibile] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className="select-box"
      onClick={() => setIsVisibile(!isVisibile)}
      onBlur={() => setIsVisibile(false)}
    >
      <span className="select-box__label">{label}</span>
      <div className="select-box__wrapper">
        <span className="select-box__value">{value}</span>
        {isVisibile && (
          <div className="select-box__options">
            {options.map((option, index) => (
              <div
                className={`select-box__option ${option === value && "active"}`}
                onClick={() => onSelect(labelLocal, option)}
                key={index}
              >
                <span>{option}</span>
                <span>{option === value && <MdCheck />}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default SelectBox;
