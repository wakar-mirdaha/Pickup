import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItem from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency";


type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart( {isOpen}: ShoppingCartProps) {
    const { closeCart,cartItems } = useShoppingCart();
    return (
        <>

            <div
                className={` bg-black/80 z-60 fixed top-0 right-0 h-full w-full max-w-md shadow-xl transition-tranform duration-300 ease-in-out 
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Cart</h2>
                        <button onClick={closeCart} className="text-gray-200 hover:text-gray-400 font-bold text-4xl cursor-pointer">
                            &times;
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto ">
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>

                    <div className="border-t pt-4 mt-auto">
                        <div className="flex justify-between text-xl font-bold">
                             Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItem.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
