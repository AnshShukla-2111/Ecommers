// import React, { useState } from "react";
// import { CartContext } from "./CartContext";

 
//  const CartState = () => {
//     const [cartArr, setcartArr] = useState([]);
//  const AddtoCart = (ans) =>{
//     console.log(ans)
//     ans.quantity=1
//     let find = cartArr.find((item)=>item.id===ans.id




        
//     )
//     setcartArr([...cartArr,ans])
//  }
//    return (
//      <div>
//        <CartContext.Provider value={{ name, }}>
//          {props.children}
//        </CartContext.Provider>
//      </div>
//    )
//  }
 
//  export default CartState
 

import React, { useState } from "react";
import CartContext from "./CartContext";
// import { CartContext } from "./CartContext";

const CartState = ({ children }) => {
  const [cartArr, setCartArr] = useState([]);

  const AddtoCart = (ans) => {
    console.log(ans);
    const newItem = { ...ans, quantity: 1 }; // Avoid mutating the original item
    const find = cartArr.find((item) => item.id === ans.id);

    if (!find) {
      setCartArr([...cartArr, newItem]); // Add new item if not already in the cart
    }
  };

  return (
    <CartContext.Provider value={{ cartArr, AddtoCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;