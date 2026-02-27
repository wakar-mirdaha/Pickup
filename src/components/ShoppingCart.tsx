import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useEffect } from "react";
import { useScrollLock } from "../hooks/useScrollLock";

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, storeProducts } = useShoppingCart();

  //  useEffect(()=>{
  //   const isMobile = window.innerWidth < 768 
  //     if(isOpen && isMobile) {
  //       document.body.classList.add('overflow-hidden','h-screen','touch-none')
  //     }else{
  //       document.body.classList.remove('overflow-hidden','h-screen','touch-none')
  //     }
  //     return () => {
  //     document.body.classList.remove('overflow-hidden', 'h-screen', 'touch-none')
  //   };
  //   },[isOpen])

  useScrollLock(isOpen)
  return (
    <div
      className={`bg-black/80 z-60 fixed top-0 right-0 h-full w-full max-w-lg shadow-xl transition-transform duration-300 ease-in-out 
        overflow-y-auto pr-2 custom-scrollbar  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
>
      <div className="p-6 flex flex-col h-full text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cart</h2>
          <button 
            onClick={closeCart} 
            className="text-gray-200 hover:text-gray-400 font-bold text-4xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="grow overflow-y-auto">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="border-t border-slate-800 pt-4 mt-auto">
          <div className="flex justify-between text-xl font-bold">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeProducts.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}