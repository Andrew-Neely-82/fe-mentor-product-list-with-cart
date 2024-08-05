import PropTypes from "prop-types";
import { useState } from "react";

const Item = ({ itemCategory, itemName, itemPrice }) => {
  const [amountInCart, setAmountInCart] = useState(0);

  const addToCart = () => setAmountInCart((prev) => prev + 1);
  const removeFromCart = () => setAmountInCart((prev) => (prev > 0 ? prev - 1 : prev));
  console.log(amountInCart);

  return (
    <div className="item">
      <img src="" alt="item-image" />
      {amountInCart === 0 ? (
        <div className="button-container not-selected">
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ) : (
        <div className="button-container selected">
          <button onClick={removeFromCart}>-</button>
          {amountInCart}
          <button onClick={addToCart}>+</button>
        </div>
      )}
      <div className="item-info">
        <span className="category">{itemCategory}</span>
        <span className="name">{itemName}</span>
        <span className="price">${itemPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

Item.propTypes = {
  itemCategory: PropTypes.any.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.any.isRequired,
};

export default Item;
