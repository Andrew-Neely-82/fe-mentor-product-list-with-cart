import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";
import { useState } from "react";
import "./style/App.scss";

function App() {
  const [itemsInCart, setItemsInCart] = useState({ total: 0 });

  const addToCart = (itemName, itemPrice) => {
    setItemsInCart((prev) => ({
      ...prev,
      [itemName]: {
        quantity: (prev[itemName]?.quantity || 0) + 1,
        price: itemPrice,
      },
      total: prev.total + 1,
    }));
  };

  const removeFromCart = (itemName) => {
    setItemsInCart((prev) => {
      const newQuantity = Math.max((prev[itemName]?.quantity || 0) - 1, 0);
      const newTotal = prev.total - 1;

      const newItems = {
        ...prev,
        [itemName]: { ...prev[itemName], quantity: newQuantity },
        total: newTotal,
      };

      if (newQuantity === 0) {
        delete newItems[itemName];
      }

      return newItems;
    });
  };

  const clearItems = (itemName) => {
    setItemsInCart((prev) => {
      const item = prev[itemName];
      if (!item) return prev;

      const newTotal = prev.total - item.quantity;
      const newItems = { ...prev };
      delete newItems[itemName];

      return {
        ...newItems,
        total: newTotal,
      };
    });
  };

  return (
    <>
      <main>
        <LeftSide itemsInCart={itemsInCart} addToCart={addToCart} removeFromCart={removeFromCart} />
        <RightSide data={itemsInCart} onClick={clearItems} />
      </main>
    </>
  );
}

export default App;
