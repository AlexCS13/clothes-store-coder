import './ItemList.css'
import { Item } from "../Item/Item"

export default function ItemList({items}) {
    return(
        <section>
            <div>
                {
                    items.map(index =>  <Item key={index.id} item={index} />)
                }
            </div>
        </section>
    )
}