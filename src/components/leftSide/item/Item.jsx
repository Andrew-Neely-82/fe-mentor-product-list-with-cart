import Remove from "../../../assets/svg/icon-decrement-quantity.svg?react";
import Add from "../../../assets/svg/icon-increment-quantity.svg?react";
import AddToCart from "../../../assets/svg/icon-add-to-cart.svg?react";
import PropTypes from "prop-types";

const Item = ({ image, itemCategory, itemName, itemPrice, amountInCart, addClickFunc, removeClickFunc }) => {
  return (
    <div className="item">
      <img className={amountInCart > 0 ? "highlight" : ""} src={image} alt="item-image" />
      {amountInCart === 0 ? (
        <div className="button-container not-selected">
          <button onClick={addClickFunc}>
            <AddToCart className="cart" />
            Add to Cart
          </button>
        </div>
      ) : (
        <div className="button-container selected">
          <button onClick={removeClickFunc}>
            <Remove />
          </button>
          <span className="cart-amount">{amountInCart}</span>
          <button onClick={addClickFunc}>
            <Add />
          </button>
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
  image: PropTypes.string.isRequired,
  itemCategory: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  amountInCart: PropTypes.number.isRequired,
  addClickFunc: PropTypes.func.isRequired,
  removeClickFunc: PropTypes.func.isRequired,
};

export default Item;
