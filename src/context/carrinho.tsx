import { createContext, ReactNode, useState } from "react";

interface ICart {
    cart: Cart | undefined,
    setCart: React.Dispatch<React.SetStateAction<Cart | undefined>>
}

const CartProvider = createContext<ICart>({
    cart: undefined, 
    setCart: () => {}
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
    const [cart, setCart] = useState<Cart | undefined>(undefined);
    
    return (
        <CartProvider.Provider value={{ cart, setCart }}>
            {children}
        </CartProvider.Provider>
    )
}

export default CartContext
