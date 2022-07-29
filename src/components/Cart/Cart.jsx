import React from 'react'
import { CartContext } from '../CartContext/CartContext'

export default function Cart() {
    const cartItems = useContext(CartContext)
    console.log(cartItems.cartList)

    return (
        <div>Cart</div>
    )
}
