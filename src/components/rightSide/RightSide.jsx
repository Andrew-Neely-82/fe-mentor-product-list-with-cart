import PropTypes from "prop-types";

const RightSide = ({ data, onClick }) => {
  // Extract item names and quantities
  const itemsList = Object.keys(data)
    .filter((key) => key !== "total")
    .map((key) => ({
      itemName: key,
      itemValue: data[key]?.quantity,
      itemPrice: data[key]?.price,
    }));

  return (
    <section className="right-side">
      <h3>Your Cart ({data.total} items)</h3>
      <ul>
        {itemsList.map(({ itemName, itemValue, itemPrice }) => (
          <li key={itemName}>
            {itemName}: {itemValue} x ${itemPrice.toFixed(2)} = ${(itemValue * itemPrice).toFixed(2)}
            <button onClick={() => onClick(itemName)}>Clear</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

RightSide.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RightSide;
