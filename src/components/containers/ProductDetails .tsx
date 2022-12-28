import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailProps } from "../types";

type Product = {
  title: string,
  price: number,
  description: string,
  img: string,
}

const ProductDetails: React.FC<ProductDetailProps> = ({ addCart }) => {
  const { id } = useParams();
  const [value, setvalue] = useState<Product | null>(null);
  async function fetchproduct() {
    const data = await fetch(
      `https://kiranastore-upload-backend-f22labs.onrender.com/products/${id}`
    );
    const res = await data.json();
    // console.log(res)
    setvalue(res.result);
  }
  useEffect(() => {
    fetchproduct();
  }, []);
  // if (value?.length === 0) {
  //   return <p>loading...</p>;
  // }

  function handleChange() {
    addCart(value);
  }
  return (
    <div className="p-6  w-full min-h-screen flex">
      <div className="w-fit">
        <img className="w-2/5" src={value?.img} alt="" />
      </div>
      <div className="p-8">
        <h1>{value?.title}</h1>
        <h2>description:</h2>
        <p>{value?.description}</p>
        <button
          onClick={handleChange}
          className="border-2 border-black px-4 py-2 mt-4"
        >
          addtocart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
