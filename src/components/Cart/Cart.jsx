import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

export default function Cart() {
    const { cartList, removeItem } = useContext(CartContext)

    return (
        cartList.length
        ? (
            cartList.map(item => {
                return(
                    <div>
                        <div>{JSON.stringify(item)}</div>
                        <button onClick={removeItem(item.id)}>x</button>
                    </div>
                )
            })
        )
        : (
            <div className="empty-cart">
                <h1>The cart is empty</h1>
                <p>Back to <Link to='/'>home page</Link></p>
            </div>
        )
    )
}
