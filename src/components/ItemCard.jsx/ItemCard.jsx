import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import './ItemCard.css'
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { CartContext } from "../CartContext/CartContext";

export default function ItemCard({ item }) {
    const { addToCart } = useContext(CartContext)

    return(
        <div className="item-card">
            <Link to={`/item/${item.id}`}>
                <div>
                    <img src={item.image} alt={item.id}/>
                    <h4>{item.title}</h4>
                    <h5>{item.price}</h5>
                </div>
            </Link>
            <QuantitySelector item={item} stock={5} initial={0} onAdd={addToCart}/>
        </div>
    )
}