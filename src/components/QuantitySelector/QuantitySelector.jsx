import { useState } from "react";

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
        <>
            <button onClick={add}>+</button>
            <button onClick={deduct}>-</button>
            <button onClick={()=>onAdd(counter, stock)}>Añadir al carrito</button>
        </>
    )
}