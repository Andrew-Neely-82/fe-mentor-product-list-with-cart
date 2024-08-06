import Cake from "../../assets/svg/illustration-empty-cart.svg?react";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <Cake />
      <span>Your added items will appear here</span>
    </div>
  );
};

export default EmptyCart;
