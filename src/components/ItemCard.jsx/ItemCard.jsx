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
        <div className="item-card">
            <Link to={`/item/${item.id}`}>
                <div>
                    <img src={item.image} alt={item.id}/>
                    <h4>{item.title}</h4>
                    <h5>{item.price}</h5>
                    <h2>{addCart}</h2>
                </div>
            </Link>
            <QuantitySelector stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}