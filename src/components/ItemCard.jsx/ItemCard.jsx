import { Link } from "react-router-dom";
import { useState } from "react";
import './ItemCard.css'
import QuantitySelector from "../QuantitySelector/QuantitySelector";

export default function ItemCard({ item }) {
    const [addCart, setAddCart] = useState([]);

    const onAdd = (counter, stock) =>{
        if (stock>0){
            setAddCart(addCart[addCart.length] = counter);
        }
        console.log(addCart)
    }

    return(
        <Link to={`/item/${item.id}`}>
            <div className="item-card">
                <img src={item.image} alt={item.id}/>
                <h4>{item.title}</h4>
                <h5>{item.price}</h5>
                <QuantitySelector stock={5} initial={1} onAdd={onAdd}/>
                <h2>{addCart}</h2>
            </div>
        </Link>
    )
}