// // import React, { useState } from 'react'
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//  const [allProducts, setAllProducts] = useState([]);
//  console.log(allProducts);
//  const getData = async () => {

//   const res = await fetch("https://www.dummyjson.com/products?limit=0")
//       let data = await res.json();
//       console.log(data)
//        setAllProducts(data.products);

//  };
//  useEffect(() => {
//    getData();
//  }, []);

//   return (
//     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
//       {allProducts.map((product) => (
//         <div
//           // key={product.id}
//           className="card1 shadow-xl flex flex-col text-white bg-[rgba(174,103,103,0.2)] items-center gap-2 p-3 shadow-black"
//         >
//           <img src={product.thumbnail} alt={product.title} />
//           <p className="md:text-xl font-semibold sm:text-lg text-md">
//             {product.title}
//           </p>

//           <button className="bg-blue-400 text-black" onClick={()=>BsCartX.AddtoCart}>
//             {/* <Link to={"/cart"} state={product}> */}
//               Add To Cart
//             {/* </Link> */}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home



import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { AddtoCart } = useContext(CartContext);

  const getData = async () => {
    try {
      const res = await fetch("https://www.dummyjson.com/products?limit=10");
      const data = await res.json();
      setAllProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {allProducts.map((product) => (
        <div
          key={product.id}
          className="card1 shadow-xl flex flex-col text-white bg-[rgba(174,103,103,0.2)] items-center gap-2 p-3 shadow-black"
        >
          <img src={product.thumbnail} alt={product.title} />
          <p className="md:text-xl font-semibold sm:text-lg text-md">
            {product.title}
          </p>

          <button
            className="bg-blue-400 text-black"
            onClick={() => AddtoCart(product)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;