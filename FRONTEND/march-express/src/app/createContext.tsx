'use client'
import {createContext, useEffect, useState} from 'react';

interface CartItem {
    _id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartContextInterface {
    cartItems: CartItem[];
    addItemToCart: (item: CartItem) => void;
    removeItemFromCart: (itemId: string) => void;
}

const CartContext = createContext<CartContextInterface>({
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
});


const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // createContext.js
    useEffect(() => {
        console.log('Cart items:', cartItems);
    }, [cartItems]);

    const addItemToCart = (product: CartItem) => {
        console.log('Adding item to cart:', product);
        setCartItems([...cartItems, product]);
    };

    const removeItemFromCart = (itemId: string) => {
        setCartItems(cartItems.filter((item) => item._id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };