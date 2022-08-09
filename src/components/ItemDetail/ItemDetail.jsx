import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../utils/firebaseConfig"

export default function ItemDetail() {

    const {itemId} = useParams()
    const {addToCart, cartList} = useContext(CartContext)
    const [item, setItem] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const firebaseData = await getDocs(collection(db, "products"))
            const newData = []
            firebaseData.forEach (async item => {
                newData.push ({...item.data(), id:item.id})
            })
            setItem(newData.filter(item => {
                console.log(item.id === itemId, item.id, itemId)
                return item.id === itemId}))
                console.log(item)
        }
        fetchData()

    }, [])

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