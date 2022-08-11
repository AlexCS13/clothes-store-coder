import React, {useContext} from "react"
import { Link } from "react-router-dom"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import { CartContext } from "../CartContext/CartContext"

export default function ItemDetail({ item }) {

    const {addToCart, cartList} = useContext(CartContext)
    console.log(item)
    return(
            <div className="item-detail">
                <h1>{item.title}</h1>
                <div className="item-detail-image">
                    <img src={item.image} alt={item.id} />
                </div>
                <div className="item-detail-details">
                    <p>Description: {item.description}</p>
                    <Link to={`/category/${item.category}`}>
                        <p>Category: {item.category}</p>
                    </Link>
                    <p>Price: {item.price}</p>
                    {
                        cartList.length
                        ? <Link to={"/cart"}>Go to cart</Link>
                        : <QuantitySelector item={item} stock={5} initial={0} onAdd={addToCart}/>
                    }
                </div>
            </div>
    )
}