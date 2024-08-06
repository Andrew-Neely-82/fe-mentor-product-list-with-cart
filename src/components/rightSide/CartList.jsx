import Remove from "../../assets/svg/icon-remove-item.svg?react";
import PropTypes from "prop-types";
import React from "react";

const CartList = ({ itemsList, onClick }) => {
  return (
    <ul>
      {itemsList.map(({ itemName, itemAmount, itemPrice }, index) => {
        const price = `@ $${itemPrice.toFixed(2)}`;
        const total = `$${(itemAmount * itemPrice).toFixed(2)}`;
        const isLastItem = index === itemsList.length - 1;

        return (
          <React.Fragment key={itemName}>
            <li>
              <div className="cart-info">
                <span className="cart-item">{itemName}</span>
                <div className="cart-math">
                  <span className="red">{itemAmount}x</span>
                  <span className="cart-item-price">{price}</span>
                  <span className="cart-item-total">{total}</span>
                </div>
              </div>
              <div>
                <button onClick={() => onClick(itemName)}>
                  <Remove />
                </button>
              </div>
            </li>
            {!isLastItem && <hr />}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

CartList.propTypes = { itemsList: PropTypes.array.isRequired, onClick: PropTypes.func };

export default CartList;
