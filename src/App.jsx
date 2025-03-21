

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import View from "./Pages/View"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="view" element={<View />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

