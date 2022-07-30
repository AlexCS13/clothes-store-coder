import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

export default function Cart() {
    const { cartList } = useContext(CartContext)

    return (
        cartList.length
        ? (
            <div>{JSON.stringify(cartList)}</div>
        )
        : (
            <div className="empty-cart">
                <h1>The cart is empty</h1>
                <p>Back to <Link to='/'>home page</Link></p>
            </div>
        )
    )
}
