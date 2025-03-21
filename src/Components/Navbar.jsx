
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = ({ cartCount }) => {
  const [showSidebar, setshowSidebar] = useState(false);

  return (
    <div className="h-[65px] fixed top-0 left-0 right-0 bg-amber-900 flex justify-between items-center px-16 text-white z-10">
      <h3 className="bg-blue-300 text-black w-[200px] font-bold">
        Ecom-Project
      </h3>
      <ul className="hidden gap-8 items-center md:flex">
        <li className="text-lg border-b">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg border-b">
          <Link to="/about">About</Link>
        </li>
        <li className="text-lg border-b">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-lg">
          <Link to="/cart" className="flex items-center gap-1 relative">
            <BsCart3 size={25} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
        <li className="text-sm bg-orange-500 text-black font-bold rounded-md px-4 py-2">
          <Link to="/login">Login</Link>
        </li>
        <li className="text-sm bg-orange-300 text-black font-bold rounded-md px-4 py-2">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>

      {showSidebar && (
        <ul className="flex flex-col px-5 py-2 gap-8 bg-amber-900 h-screen fixed items-center md:hidden justify-around left-0 top-0">
          <h3 className="text-2xl bg-blue-300 text-black font-bold">
            Ecom-Project
          </h3>
          <li className="text-lg border-b">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg border-b">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg border-b">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-lg">
            <Link to="/cart" className="flex items-center gap-1 relative">
              <BsCart3 size={25} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}

      <div
        onClick={() => setshowSidebar(!showSidebar)}
        className="md:hidden block"
      >
        <RiMenu3Fill size={26} />
      </div>
    </div>
  );
};

export default Navbar;

 