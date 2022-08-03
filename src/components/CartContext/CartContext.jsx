import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        console.log("addCart", item.id)
        if (isInCart(item.id)) {
            setCartList(cartList.map( cartItem => {
                console.log(cartItem.id, item.id)
                if (cartItem.id === item.id) {
                    return{
                        ...cartItem,
                        quantity: item.quantity + cartItem.quantity
                    }
                }else {
                    return{
                        ...cartItem
                    }
                }
            }))
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
        for (let item in cartList) {
            console.log(item)
            if(cartList[item].id === id){
                return true
            }
        }
        return false
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}