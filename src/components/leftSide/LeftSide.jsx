import Item from "./item/Item";
import itemsData from "../../data/data.json";
import { loadImage } from "../../utils/loadImages";

const LeftSide = () => {
  return (
    <section className="left-side">
      <h2>Desserts</h2>
      <div className="item-container">
        {itemsData.map((item, index) => {
          const image = loadImage(item.image.desktop);
          return <Item key={index} image={image} itemCategory={item.category} itemName={item.name} itemPrice={item.price} />;
        })}
      </div>
    </section>
  );
};

export default LeftSide;
