import { useState } from "react";
import "./QuantitySelector.css"

export default function QuantitySelector({stock,initial,onAdd}) {
    const [counter, setCounter] = useState(initial);

    const add = () => {
        if (counter<stock){
            setCounter(counter + 1)
        }
    };

    const deduct = () => {
        if (counter >= 1){
            setCounter(counter - 1);
        }
    };

    return(
        <div className="quantity-selector">
            <button onClick={add}>+</button>
            <p>{counter}</p>
            <button onClick={deduct}>-</button>
            <button onClick={()=>onAdd(counter, stock)}>Añadir al carrito</button>
        </div>
    )
}