import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItem from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItem.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="
      w-full flex gap-4 p-4 mb-4
      bg-slate-900
      border border-slate-800
      rounded-xl
      shadow-md
    ">

      {/* Image */}
      <img
        className="w-24 h-24 rounded-lg object-cover"
        src={item.imgUrl}
        alt={item.name}
      />

      {/* Content */}
      <div className="flex justify-between w-full items-center">

        <div className="flex flex-col gap-1">
          <p className="text-white font-semibold text-lg">
            {item.name}
          </p>

          {quantity > 0 && (
            <span className="text-gray-400 text-sm">
              Quantity: {quantity}
            </span>
          )}

          <p className="text-gray-400 text-sm">
            {formatCurrency(item.price)} each
          </p>
        </div>

        {/* Price + Remove */}
        <div className="flex items-center gap-4">

          <p className="text-cyan-400 font-bold text-lg">
            {formatCurrency(item.price * quantity)}
          </p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="
              w-8 h-8 flex items-center justify-center
              rounded-full
              bg-slate-800
              hover:bg-red-600
              hover:text-white
              transition duration-300
              text-gray-400
              text-lg
            "
          >
            ×
          </button>

        </div>
      </div>
    </div>
  )
}