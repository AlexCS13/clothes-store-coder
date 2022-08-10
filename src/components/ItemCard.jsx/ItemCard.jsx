import { Link } from "react-router-dom";
import './ItemCard.css'

export default function ItemCard({ item }) {

    return(
        <div className="item-card">
            <Link to={`/item/${item.id}`}>
                <div>
                    <img src={item.image} alt={item.id}/>
                    <h4>{item.title}</h4>
                    <h5>{item.price}</h5>
                </div>
            </Link>
        </div>
    )
}