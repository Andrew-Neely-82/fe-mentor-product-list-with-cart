import EmptyCart from "./EmptyCart";
import PropTypes from "prop-types";
import React from "react";

const RightSide = ({ data, onClick }) => {
  const itemsList = Object.keys(data)
    .filter((key) => key !== "total")
    .map((key) => ({
      itemName: key,
      itemValue: data[key]?.quantity,
      itemPrice: data[key]?.price,
    }));

  console.log(itemsList.length > 0);

  const totalCost = itemsList.reduce((total, item) => total + item.itemPrice * item.itemValue, 0).toFixed(2);

  return (
    <section className="right-side">
      <h3>Your Cart ({data.total})</h3>
      {itemsList.length > 0 ? (
        <>
          <ul>
            {itemsList.map(({ itemName, itemValue, itemPrice }, index) => {
              const price = `@ $${itemPrice.toFixed(2)}`;
              const total = `$${(itemValue * itemPrice).toFixed(2)}`;
              const isLastItem = index === itemsList.length - 1;

              return (
                <React.Fragment key={itemName}>
                  <li>
                    <div className="cart-info">
                      <span>{itemName}</span>
                      <div className="cart-math">
                        <span className="red">{itemValue}x</span>
                        <span className="cart-item-price">{price}</span>
                        <span className="cart-item-total">{total}</span>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => onClick(itemName)}>Clear</button>
                    </div>
                  </li>
                  {!isLastItem && <hr />}
                </React.Fragment>
              );
            })}
          </ul>
          <hr />
          <div className="cart-total">
            <span>Order Total</span>
            <span>${totalCost}</span>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

RightSide.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RightSide;
