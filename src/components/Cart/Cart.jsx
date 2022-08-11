import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import { order } from '../Checkout/Checkout'

export default function Cart() {
    const { cartList, removeItem, clearCart } = useContext(CartContext)
    const [ totalCart, setTotalCart ] = useState(0)
    const calculateTotalCart = () => {
        let total = 0;
        cartList.forEach(item => {
            total += item.price * item.quantity
        })
        setTotalCart(total)
    }

    useEffect(() => {
        calculateTotalCart()

    },[cartList])


    return (
        cartList.length
        ? (
            <div>
                {
                    cartList.map(item => {
                        return(
                            <div key={item.id}>
                                <div>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>${item.price}/piece</p>
                                <p>quantity: {item.quantity}</p>
                                <p>{item.price*item.quantity}</p>
                                <button onClick={() => removeItem(item.id)}>x</button>
                            </div>
                        )
                    })
                }
                <hr/>
                <div>
                    <h1>Total Cart: ${totalCart}</h1>
                    <button onClick={() => clearCart()}>Empty Cart</button>
                    <button onClick={() => order()}>CHECKOUT</button>
                </div>
            </div>
        )
        : (
            <div className="empty-cart">
                <h1>The cart is empty</h1>
                <p>Back to <Link to='/'>home page</Link></p>
            </div>
        )
    )
}