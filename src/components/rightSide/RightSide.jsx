import React, { useState } from "react";
import PropTypes from "prop-types";

const RightSide = ({ props }) => {
  const [amount, setAmount] = useState(0);

  return (
    <section className="right-side">
      <h3>Your Cart ({amount})</h3>
    </section>
  );
};

RightSide.propTypes = {};

export default RightSide;
