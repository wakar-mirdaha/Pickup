import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItem from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"


type cartItemProps = {
    id:number
    quantity:number
}

export function CartItem( {id, quantity}: cartItemProps) {

    const { removeFromCart } = useShoppingCart()
    const item = storeItem.find(i => i.id === id)
    if(item == null ) return null

    return (
        <div className="w-full flex gap-3 mb-5 bg-slate-200 text-black">
            <div>
            <img 
            className="w-32 h-25 object-cover"
            src={item.imgUrl} alt="product" />
            </div>

            <div className="flex justify-between w-full">
            <div className="flex gap-2 flex-col h-full">
                <p className="text-lg">{item.name}</p> {quantity > 0 && (
                    <span className="text-sm">x{quantity}</span>
                )}
                <p className="text-lg text-gray-400">{formatCurrency(item.price)}</p>
            </div>
            <div className="flex gap-2 justify-center items-center text-xl h-full mr-2">
                <p className="text-gray-400 text-lg">{formatCurrency( item.price * quantity)}</p>
                <button
                onClick={ () => removeFromCart(item.id)}
                className="bg-transparent text-black font-thin text-lg rounded-sm border border-gray-400 p-2 cursor-pointer">&times;</button>
            </div>
            </div>

        </div>
    )
}