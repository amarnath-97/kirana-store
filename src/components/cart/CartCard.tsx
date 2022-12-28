import React from "react";
import { CartCardProps } from "../types";

const CartCard:React.FC<CartCardProps> = ({ value, handleCount }) => {
  const { img, title, _id, count }: any = value;
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white w-full flex justify-between">
      <div className="w-3/12" >
        <img src={img} className="w-full" />
        <h1>{title}</h1>
      </div>

      <div>
        <button
          className="border-2 border-black px-2 py-1 mt-4"
          onClick={() => handleCount("-", _id)}
        >
          -
        </button>
        <span className="px-2"> {count}</span>
        <button
          className="border-2 border-black px-2 py-1 mt-4"
          onClick={() => handleCount("+", _id)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartCard;
