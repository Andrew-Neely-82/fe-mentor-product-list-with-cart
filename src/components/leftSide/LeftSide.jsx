import PropTypes from "prop-types";
import Item from "./item/Item";

const LeftSide = ({ props }) => {
  return (
    <section className="left-side">
      <h2>Desserts</h2>
      <Item itemName="Waffle with Berries" itemCategory="Waffle" itemPrice={6.5} />
    </section>
  );
};

LeftSide.propTypes = {};

export default LeftSide;
