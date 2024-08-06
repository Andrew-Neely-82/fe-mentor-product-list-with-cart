import OrderConfirmedIcon from "../../assets/svg/icon-order-confirmed.svg?react";
import PropTypes from "prop-types";
import React from "react";

const OrderConfirmed = ({ itemsInCart }) => {
  const itemsList = Object.keys(itemsInCart)
    .filter((key) => key !== "total")
    .map((key) => ({
      itemName: key,
      itemAmount: itemsInCart[key]?.quantity,
      itemPrice: itemsInCart[key]?.price,
      itemImage: itemsInCart[key]?.image,
    }));

  const totalCost = itemsList.reduce((total, item) => total + item.itemPrice * item.itemAmount, 0).toFixed(2);

  return (
    <div className="order-confirmed-modal">
      <div className="modal-content">
        <OrderConfirmedIcon />
        <h2>Order Confirmed</h2>
        <span className="enjoy">We hope you enjoy your food!</span>
        <div className="order-card">
          <ul>
            {itemsList.map(({ itemName, itemAmount, itemPrice, itemImage }, index) => {
              const total = `$${(itemAmount * itemPrice).toFixed(2)}`;
              const isLastItem = index === itemsList.length - 1;

              return (
                <React.Fragment key={itemName}>
                  <li>
                    <div className="left-side">
                      <img src={itemImage.replace("desktop", "thumbnail")} alt={`Picture of ${itemName}`} />
                      <div className="cart-info">
                        <span className="cart-item">{itemName}</span>
                        <div className="cart-math">
                          <span className="red">{itemAmount}x</span>
                          <span className="cart-item-price">@ ${itemPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <span className="cart-item-total">{total}</span>
                  </li>
                  {!isLastItem && <hr />}
                </React.Fragment>
              );
            })}
            <hr />
          </ul>
          <div className="cart-total-container">
            <p>Order Total</p>
            <p className="cart-total">${totalCost}</p>
          </div>
        </div>
        <button>Start New Order</button>
      </div>
    </div>
  );
};

OrderConfirmed.propTypes = { itemsInCart: PropTypes.object.isRequired };

export default OrderConfirmed;


