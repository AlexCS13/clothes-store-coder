import React, {useContext} from "react"
import { Link } from "react-router-dom"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import { CartContext } from "../CartContext/CartContext"

export default function ItemDetail({ item }) {

    const {addToCart, cartList} = useContext(CartContext)

    return(
        item.length
        ? (
            <div className="item-detail">
                <h1>{item[0].title}</h1>
                <div className="item-detail-image">
                    <img src={item[0].image} alt={item[0].id} />
                </div>
                <div className="item-detail-details">
                    <p>Description: {item[0].description}</p>
                    <Link to={`/category/${item[0].category}`}>
                        <p>Category: {item[0].category}</p>
                    </Link>
                    <p>Price: {item[0].price}</p>
                    {
                        cartList.length
                        ? <Link to={"/cart"}>Go to cart</Link>
                        : <QuantitySelector item={item[0]} stock={5} initial={0} onAdd={addToCart}/>
                    }
                </div>
            </div>

        )
        :null
    )
}