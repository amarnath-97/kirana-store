import React from "react";
import { NavLink } from "react-router-dom";

function Card({ value }) {
  const { img, title, price } = value;
  // console.log(value);
  return (
    <article aria-label="card" className="p-6 rounded-lg shadow-lg bg-white w-1/2 disabled:text-purple-300 m-8 h-64 flex flex-col justify-between">
      <div className="w-2/4 h-2/4">
        <img src={img}/>
      </div>
      <h1>{title}</h1>
      <h1>₹ {price}/-</h1>
    </article>
  );
}

export default Card;
