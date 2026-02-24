import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <div
           className="
                        flex flex-col
                        bg-slate-900
                        border border-slate-800
                        rounded-2xl
                        overflow-hidden
                        shadow-lg
                        hover:shadow-black-500/20
                        transition duration-300
                        h-full
"
        >
            {/* Image */}
            <div className="overflow-hidden">
                <img className="w-full h-56 object-contain transition duration-500 hover:scale-105" src={imgUrl} alt={name} />
            </div>

            {/* Content */}
            <div className="flex flex-col grow p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-semibold leading-tight">{name}</h2>

                    <span className="text-digital-blue-300 font-bold text-lg">{formatCurrency(price)}</span>
                </div>

                {/* Spacer pushes button down */}
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <button
                            onClick={() => increaseCartQuantity(id)}
                       className="
                                w-full py-1 rounded-xl
                                bg-linear-to-r from-blue-600/80 to-sky-600/80
                                 text-xl cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-center items-center gap-4">
                                <button
                                    onClick={() => decreaseCartQuantity(id)}
                                    className="
                    w-9 h-9 rounded-lg
                    bg-digital-blue-800
                    hover:bg-digital-blue-700
                    transition
                  "
                                >
                                    −
                                </button>

                                <span className="text-base">
                                    <span className="text-xl font-bold text-digital-blue-300">{quantity}</span> in cart
                                </span>

                                <button
                                    onClick={() => increaseCartQuantity(id)}
                                    className="
                    w-9 h-9 rounded-lg
                    bg-digital-blue-800
                    hover:bg-digital-blue-700
                    transition
                  "
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() => removeFromCart(id)}
                                className="
                  py-1 rounded-lg
                  bg-red-600/80
                  hover:bg-red-600
                  transition duration-300
                  text-xl
                "
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoreItem;
