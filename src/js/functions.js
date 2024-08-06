import { Cart } from "./classes";

export function addToCartFunction(cart, setCart) {
  return (itemName, itemPrice, itemImage) => {
    const newCart = new Cart(cart);
    newCart.addItem(itemName, itemPrice, itemImage);
    setCart(newCart);
  };
}

export function removeFromCartFunction(cart, setCart) {
  return (itemName) => {
    const newCart = new Cart(cart);
    newCart.removeItem(itemName);
    setCart(newCart);
  };
}

export function clearItemsFunction(cart, setCart) {
  return (itemName) => {
    const newCart = new Cart(cart);
    newCart.clearItem(itemName);
    setCart(newCart);
  };
}
