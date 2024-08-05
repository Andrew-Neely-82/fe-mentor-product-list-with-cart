import { loadImage } from "../../utils/loadImages";
import itemsData from "../../data/data.json";
import PropTypes from "prop-types";
import Item from "./item/Item";

const LeftSide = ({ itemsInCart, addToCart, removeFromCart }) => {
  return (
    <section className="left-side">
      <h2>Desserts</h2>
      <div className="item-container">
        {itemsData.map((item, index) => {
          const image = loadImage(item.image.desktop);
          // prettier-ignore
          return (
            <Item
              key={index}
              image={image}
              itemCategory={item.category}
              itemName={item.name}
              itemPrice={item.price}
              amountInCart={itemsInCart[item.name]?.quantity || 0}
              addClickFunc={() => addToCart(item.name, item.price)}
              removeClickFunc={() => removeFromCart(item.name, item.price)}
            />
          );
        })}
      </div>
    </section>
  );
};

LeftSide.propTypes = {
  itemsInCart: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default LeftSide;
