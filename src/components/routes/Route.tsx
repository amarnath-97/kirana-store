import React from "react";
import { useRoutes } from "react-router-dom";
import Cart from "../cart/Cart";
import Home from "../containers/Home";
import ProductDetails from "../containers/ProductDetails ";

interface Props{
  products: Object[],
  addCart: Function,
  cart: Object[],
  handleCount: Function,
  currentPage: number,
  handleClick: Function,
  totalPage: number,
  priceRange: number,
  setPriceRange: Function,
  postPerPage: number
}

const RouteBODY:React.FC<Props> = ({
  products,
  addCart,
  cart,
  handleCount,
  currentPage,
  handleClick,
  totalPage,
  priceRange,
  setPriceRange,
  postPerPage
}) => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <Home
          data={products}
          // currentPage={currentPage}
          handleClick={handleClick}
          totalPage={totalPage}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          postPerPage={postPerPage}
        />
      ),
    },
    {
      path: "store/:id",
      element: <ProductDetails addCart={(val: Object) => addCart(val)} />,
    },
    {
      path: "cart",
      element: <Cart cart={cart} handleCount={(e: Object, id: string) => handleCount(e, id)} />,
    },
    // ...
  ]);

  return routes;
}

export default RouteBODY;