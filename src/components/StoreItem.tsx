import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id : number,
    name : string,
    price: number,
    imgUrl: string
}

const StoreItem = ( {id, name, price, imgUrl} : StoreItemProps) => {
    const { getItemQuantity,
         increaseCartQuantity,
         decreaseCartQuantity,
         removeFromCart } = useShoppingCart()

    const quantity = getItemQuantity(id)


    return (
       <div className="max-w-3xl bg-slate-200 text-black rounded-xl shadow-sm overflow-hidden">

        <img 
        className="w-full h-48 object-cover"
        src={imgUrl} alt="product" />

        <div className="p-5">
            <div className="flex items-center justify-between text-xl">
                <span>{name}</span>
                <span>{price}</span>
            </div>

            <p>Product description</p>

            <div className="flex flex-col gap-2 mt-5">
                {
                    quantity === 0 ? ( 

                         <button className="w-full bg-blue-600 rounded-md text-2xl text-white cursor-pointer"
                         onClick={()=> increaseCartQuantity(id)}>+Add to cart</button>
                    ) : (
                        <div className="flex flex-col items-center gap-2 justify-center">

                            <div className="flex gap-2 justify-center items-center">
                                <button className="bg-blue-600 w-8 h-full rounded-md text-center text-white cursor-pointer"
                                onClick={()=> increaseCartQuantity(id)}>+</button>
                                <p className="text-lg"><span className="text-2xl">{quantity}</span>in Cart</p>
                                <button className="bg-blue-600 w-8 h-full rounded-md text-center text-white cursor-pointer" 
                                onClick={()=> decreaseCartQuantity(id)}>-</button>
                            </div>

                            <div>
                                <button className="bg-red-500 px-2 py-1 w-auto text-lg text-white rounded-sm cursor-pointer"
                                onClick={()=> removeFromCart(id)}>Remove</button>
                            </div>
                        </div>
                    )
                }
               
                    
            </div>
        </div>
       </div>
    )
}

export default StoreItem