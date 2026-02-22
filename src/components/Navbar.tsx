import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <nav className="
      sticky top-0 z-50 h-16
      bg-digital-blue-950/80 backdrop-blur-md
      border-b border-digital-blue-800
      flex items-center justify-between
      px-8
    ">

      <div className="text-xl font-bold text-digital-blue-300">
       <NavLink to={"/"}>
        PickUp
       </NavLink>
      </div>

      <div className="flex gap-8 text-lg font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-digital-blue-300 border-b-2 border-digital-blue-300 pb-1"
              : "text-gray-300 hover:text-digital-blue-400 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive
              ? "text-digital-blue-300 border-b-2 border-digital-blue-300 pb-1"
              : "text-gray-300 hover:text-digital-blue-400 transition"
          }
        >
          Store
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-digital-blue-300 border-b-2 border-digital-blue-300 pb-1"
              : "text-gray-300 hover:text-digital-blue-400 transition"
          }
        >
          About
        </NavLink>
      </div>

      {cartQuantity > 0 && (
        <button onClick={openCart} className="relative group">
          <img src="/images/shopping-cart.svg" alt="cart" 
          className="h-10 w-10 cursor-pointer"/>
          <div className="
            absolute -top-2 -right-2
            h-5 w-5 rounded-full
            bg-red-500
            text-xs font-bold text-white
            flex items-center justify-center
          ">
            {cartQuantity}
          </div>
        </button>
      )}
    </nav>
  )
}

export default Navbar