import { createContext, useContext, useState, type ReactNode } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

type CartItem = {
    id: number;
    quantity: number;
};

type ShoppingCardContext = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    setStoreProducts: (products: Product[]) => void;
    storeProducts: Product[];
    cartQuantity: number;
    cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCardContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, SetCartItems] = useLocalStorage<CartItem[]>("shoppin-cart", []);
    const [storeProducts, setStoreProducts] = useState<Product[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        SetCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) return { ...item, quantity: item.quantity + 1 };
                    return item;
                });
            }
        });
    }

    function decreaseCartQuantity(id: number) {
        SetCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) return { ...item, quantity: item.quantity - 1 };
                    return item;
                });
            }
        });
    }

    function removeFromCart(id: number) {
        SetCartItems((currItems) => currItems.filter((item) => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                setStoreProducts,
                storeProducts,
                cartItems,
                cartQuantity,
                openCart,
                closeCart,
            }}
        >
            <ShoppingCart isOpen={isOpen} />
            {children}
        </ShoppingCartContext.Provider>
    );
}
