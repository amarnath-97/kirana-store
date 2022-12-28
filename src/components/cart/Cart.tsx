import React from "react";
import { CartProps } from "../types";
import CartCard from "./CartCard";



const Cart:React.FC<CartProps> =({ cart, handleCount }) => {
  console.log(cart)
  if (cart.length === 0) {
    return <p>No items in the cart.</p>;
  }
  const val = cart.map((e:any) => {
    return <CartCard handleCount={handleCount} key={e._id} value={e} />;
  });
  return <div>{val}</div>;
}

export default Cart;
