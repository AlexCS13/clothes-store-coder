import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        if (isInCart()) {
            // TODO: add logic when item exists in cart and  update state
        } else {
            setCartList([...cartList, item])
        }
    }

    const removeItem = (id) => {
        const newCartList = cartList.filter(item => item.id !== id)
        setCartList(newCartList)
    }

    const clearCart = () => {
        setCartList([])
    }

    const isInCart = (id) => {
        if (cartList.id === id) {
            return true
        }
        return false
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}