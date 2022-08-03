import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchByItemId } from "../../utils/fetchByItemId"
import { CartContext } from "../CartContext/CartContext"
import QuantitySelector from "../QuantitySelector/QuantitySelector"

export default function ItemDetail() {

    const {itemId} = useParams()
    const {addToCart, cartList} = useContext(CartContext)
    const [item, setItem] = useState([])

    useEffect(() => {
        fetchByItemId(itemId)
            .then(item => setItem(item[0]))
            .catch(err => console.error(err))
    }, [])

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