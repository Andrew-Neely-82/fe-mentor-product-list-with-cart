import { addToCartFunction, clearItemsFunction, removeFromCartFunction } from "./js/functions";
import OrderConfirmed from "./components/orderConfirmed/OrderConfirmed";
import RightSide from "./components/rightSide/RightSide";
import LeftSide from "./components/leftSide/LeftSide";
import { Cart } from "./js/classes";
import { useState } from "react";
import "./style/App.scss";

function App() {
  const [cart, setCart] = useState(new Cart());

  const addToCart = addToCartFunction(cart, setCart);
  const removeFromCart = removeFromCartFunction(cart, setCart);
  const clearItems = clearItemsFunction(cart, setCart);

  return (
    <>
      <main>
        <LeftSide itemsInCart={cart.getItems()} addToCart={addToCart} removeFromCart={removeFromCart} />
        <RightSide data={cart.getItems()} onClick={clearItems} />
      </main>
      {/* <OrderConfirmed itemsInCart={cart.getItems()} /> */}
    </>
  );
}

export default App;
