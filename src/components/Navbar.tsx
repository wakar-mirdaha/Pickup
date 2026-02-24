import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <nav className="fixed top-0 w-full bg-slate-950/50 backdrop-blur-md border-b border-slate-800 text-white z-50">
      <div className="w-full mx-auto px-6 h-18 flex items-center justify-between">
        
        {/* 1. Hamburger Menu - Only visible on mobile */}
        <div className="md:hidden flex-1">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-2xl focus:outline-none"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* 2. Logo Section - flex-1 ensures it takes 1/3 of the space on desktop */}
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <img src="images/Pickup.svg" alt="carticon"
          className="w-8 h-8 mr-2" />
          <Link to="/" className="text-2xl font-bold tracking-tighter text-blue-500">
            PICK<span className="text-white">UP</span>
          </Link>
        </div>

        {/* 3. Desktop Nav Items - flex-1 and justify-center makes this perfectly centered */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-12 text-2xl">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/store" className="hover:text-blue-400 transition">Store</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        </div>

        {/* 4. Cart Button Section - flex-1 ensures it takes 1/3 of the space to balance the logo */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={openCart}
            className="relative p-2 bg-blue-600/10 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition group"
          >
            <img src="/images/shopping-cart.svg" alt="cartIcon"
            className="w-8 h-8" />
            {cartQuantity > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-slate-950">
                {cartQuantity}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900 border-b border-slate-800 ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-4 text-center">
          <Link onClick={() => setIsMenuOpen(false)} to="/" className="hover:text-blue-400">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/store" className="hover:text-blue-400">Store</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about" className="hover:text-blue-400">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar