import { useState, useContext } from "react";
import { productContext } from "../stores/ProductContex.jsx";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const { cart } = useContext(productContext);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>

      
      <nav className="bg-black text-white p-4 flex justify-between items-center fixed top-0 w-full z-50">

        <h1 className="text-2xl font-bold">
          GINA'S LUXERY
        </h1>

        <div className="flex items-center gap-4">
          
          <div className="relative">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl"
          >
            ☰
          </button>
        </div>

      </nav>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40
          
          ${showMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <div className="p-5">

          <button
            onClick={() => setShowMenu(false)}
            className="text-2xl mb-5"
          >
            ✕
          </button>

          <ul className="flex flex-col gap-5 text-lg">

            <li className="hover:text-blue-500 cursor-pointer">
              Home
            </li>

            <li className="hover:text-blue-500 cursor-pointer">
              Products
            </li>

            <li className="hover:text-blue-500 cursor-pointer">
              Cart
            </li>

          </ul>

        </div>

      </div>

    </>
  );
};

export default Navbar;