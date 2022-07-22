import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchByItemId } from "../../utils/fetchByItemId"

export default function ItemDetail() {

    const {itemId} = useParams()

    const [item, setItem] = useState([])

    useEffect(() => {
        fetchByItemId(itemId)
        .then(item => setItem(item[0]))
        .catch(err => console.log(err))
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
            </div>
        </div>
    )
}