import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../cards/Card";
import Pagination from "../pagination/Pagination";
import PriceRange from "../filter/PriceRange";
import { HomeProps } from "../types";



const Home: React.FC<HomeProps> = ({ data, postPerPage, handleClick, totalPage, priceRange, setPriceRange }) => {


  if (data.length === 0) {
    return <p>No items found. Try searching something else.</p>;
  }
  const val = data.map((e: any) => {
    return (
      <div key={e._id} className="disabled:bg-slate-500">
        <NavLink to={`store/${e._id}`} className='flex justify-center items-center'>
          <Card value={e} />
        </NavLink>
      </div>
    );
  });

  return (
    <div className="flex justify-between p-2">
      <div className="flex flex-col gap-2">
      <h3 className="p-2 text-lg font-semibold">Filters</h3>
        <PriceRange priceRange={priceRange} setPriceRange={setPriceRange}/>
      </div>

      <div className="w-4/5">
        <section className="grid grid-cols-1 gap-1 mt-4 md:grid-cols-4 sm:grid-cols-2 flex justify-center ">
          {val}
        </section>
        <Pagination
          totalPost={totalPage}
          postPerPage={postPerPage}
          handleClick={handleClick}
        />
      </div>

    </div>
  );
}

export default Home;
