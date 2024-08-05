import { createContext, ReactNode, useState } from "react";

interface ICart {
    cart: Cart[],
    removeItemFromCart: (name: string) => void,
    addItemToCart: (newItem: Cart) => void,
    updateCartItem: (name: string, quantities: number, price: string) => void,
}

export const CartProvider = createContext<ICart>({
    cart: [], 
    removeItemFromCart: () => {},
    addItemToCart: () => {},
    updateCartItem: () => {},
});

interface IProps {
    children: ReactNode
}

interface Cart {
    name: string
    quantities: number
    price: string
}

const CartContext = ({children}: IProps) => {
    const [cart, setCart] = useState<Cart[]>([]);

    const updateCartItem = (name: string, quantities: number, price: string) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.name === name ? { ...item, quantities, price } : item
            )
        );
    };

    const addItemToCart = (newItem: Cart) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.name === newItem.name);
    
            if (existingItem) {
                return prevCart.map(item => 
                    item.name === newItem.name ? { ...item, quantities: item.quantities + newItem.quantities, price: newItem.price } : item
                );
            } else {
                return [...prevCart, newItem];
            }
        });
    };

    const removeItemFromCart = (name: string) => {
        setCart(prevCart => prevCart.filter(item => item.name !== name));
    };

    return (
        <CartProvider.Provider value={{ cart, updateCartItem, addItemToCart, removeItemFromCart }}>
            {children}
        </CartProvider.Provider>
    )
}

export default CartContext;