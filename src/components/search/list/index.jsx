import ItemComponent from "../item";
import "./style.scss";

const ListComponent = ({ list }) => {
  return (
    <div className="list">
      {list.map((item, index) => (
        <ItemComponent item={item} key={index} />
      ))}
    </div>
  );
};

export default ListComponent;
