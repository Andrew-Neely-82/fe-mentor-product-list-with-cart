import CarbonNeutralIcon from "../../assets/svg/icon-carbon-neutral.svg?react";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import PropTypes from "prop-types";

const RightSide = ({ data, onClick }) => {
  const itemsList = Object.keys(data)
    .filter((key) => key !== "total")
    .map((key) => ({
      itemName: key,
      itemAmount: data[key]?.quantity,
      itemPrice: data[key]?.price,
    }));

  const totalCost = itemsList.reduce((total, item) => total + item.itemPrice * item.itemAmount, 0).toFixed(2);

  return (
    <section className="right-side">
      <h3>Your Cart ({data.total})</h3>
      {itemsList.length > 0 ? (
        <>
          <CartList itemsList={itemsList} onClick={onClick} />
          <hr />
          <div className="cart-total-container">
            <p>Order Total</p>
            <p className="cart-total">${totalCost}</p>
          </div>
          <div className="carbon-neutral">
            <CarbonNeutralIcon />
            <span>
              This is a<span className="bold"> carbon-neutral</span>&nbsp;delivery
            </span>
          </div>
          <button className="confirm-order">Confirm Order</button>
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

RightSide.propTypes = { data: PropTypes.object.isRequired, onClick: PropTypes.func.isRequired };

export default RightSide;
