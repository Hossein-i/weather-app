import "./style.scss";

const HeaderComponent = ({ btnLeft, title, subtitle, btnRight }) => {
  const handleOnClickLeft = () => btnLeft?.onClick();
  const handleOnClickRight = () => btnRight?.onClick();

  return (
    <div className="header">
      <button className="header__btn" onClick={handleOnClickLeft}>
        {btnLeft?.icon}
      </button>
      <div className="header__wrapper-title">
        <span className="header__title">{title}</span>
        <span className="header__subtitle">{subtitle}</span>
      </div>
      <button className="header__btn" onClick={handleOnClickRight}>
        {btnRight?.icon}
      </button>
    </div>
  );
};

export default HeaderComponent;
