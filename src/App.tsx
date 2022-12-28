import React, { SetStateAction, useEffect, useState } from "react";
import Navbar from "./components/routes/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import RouteBODY from "./components/routes/Route";
import qs from 'qs';
import Search from "./components/search/Search";

type ShoppingCart = {
  _id: string,
  title: string,
  price: number,
  description: string,
  img: string,
  userId: string,
}


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState<Array<ShoppingCart> | []> ([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [totalPage, setTotalPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(0);
  const [isSorted, setIsSorted] = useState(false);


  const lastPostIndex = currentPage * postPerPage;
  const fistPageIndex = lastPostIndex - postPerPage;
  let apilength;


  function addcart(data: any) {
    if (cart.find((e: any) => e._id === data._id)) {
      return;
    }
    setCart((prev) => [...prev, { ...data, count: 1 }]);
  }


  // function sortByPrice(i1, i2){
  //   if(i1.price < i2.price)
  //     return -1;
  //   else if(i1.price > i2.price)
  //     return 1;
  //   else  
  //     return 0;
  // }

  // function sortByPriceDsc(i1, i2){
  //   if(i1.price < i2.price)
  //     return -1;
  //   else if(i1.price > i2.price)
  //     return 1;
  //   else  
  //     return 0;
  // }

  // useEffect(()=>{
  //   if(isSorted){
  //     products.sort(sortByPrice);
  //     setProducts(products);
  //   }else{
  //     products.sort(sortByPriceDsc);
  //     setProducts(products);
  //   }
  // })

  useEffect(() => {
    if (searchTerm !== '') {
      const query = qs.stringify({ title: { $regex: searchTerm.toLowerCase() } });

      (async () => {
        try {
          let val = await fetch(
            `https://kirana.onrender.com/products?${query}`
          );
          let data = await val.json();
          console.log(data.data)
          apilength = data.count;
          setProducts(data.data);
          setTotalPage(data.count);
        } catch (error) {
          console.log(error)
        }
      })()
    } else {
      (async () => {
        try {
          let val = await fetch(
            `https://kirana.onrender.com/products`
          );
          let data = await val.json();
          console.log(data.data)
          apilength = data.count;
          setProducts(data.data);
          setTotalPage(data.count);
        } catch (error) {
          console.log(error)
        }
      })()
    }

  }, [searchTerm]);

  useEffect(() => {
    const query = qs.stringify({ price: { $lte: priceRange } });

    if (priceRange > 0) {
      (async () => {
        try {
          let val = await fetch(
            `https://kirana.onrender.com/products?${query}`
          );
          let data = await val.json();
          console.log(data.data)
          apilength = data.count;
          setProducts(data.data);
          setTotalPage(data.count);
        } catch (error) {
          console.log(error)
        }
      })()
    } else {
      (async () => {
        try {
          let val = await fetch(
            `https://kirana.onrender.com/products`
          );
          let data = await val.json();
          console.log(data.data)
          apilength = data.count;
          setProducts(data.data);
          setTotalPage(data.count);
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [priceRange])

  function handleCount(val: any, id: string) {
    let exist: any = cart.find((e) => e._id === id);
    if (exist && val === "+") {
      setCart(
        cart.map((x: any) => {
          return x._id === id ? { ...exist, count: exist.count + 1 } : x;
        })
      );
    } else if (val === "-") {
      setCart(
        cart.map((x : any) => {
          return x._id === id ? { ...exist, count: exist.count - 1 } : x;
        })
      );
      if (exist.count === 1) {
        setCart(cart.filter((e: any) => e._id !== id));
        return;
      }
    }

    //  setCart((e) => e.find() )
  }
  console.log(searchTerm)
  // console.log(qs.parse('title%5B%24regex%5D='))




  const currentval = products.slice(fistPageIndex, lastPostIndex);
  return (
    <div>
      <Router>
        <Navbar cart={cart} />

        <Search title='search' searchTerm={searchTerm} setSearchTerm={setSearchTerm} isSorted={isSorted} setIsSorted={setIsSorted} />

        <RouteBODY
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          products={currentval}
          totalPage={totalPage}
          addCart={addcart}
          cart={cart}
          handleCount={handleCount}
          handleClick={(e: any) => setCurrentPage(e)}
          currentPage={currentPage}
          postPerPage={postPerPage}
        />
      </Router>

      {/* <Accordion title='Users'>Testing</Accordion> */}
    </div>
  );
}

export default App;
