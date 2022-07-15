import "./style.scss";

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <label className="toggle-switch">
      <strong className="toggle-switch__label">{label}</strong>
      <div className="toggle-switch__wrapper">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="toggle-switch__slider toggle-switch__slider"></span>
      </div>
    </label>
  );
};

export default ToggleSwitch;
