import { useEffect } from "react"
import { useState } from "react"
import {useParams} from "react-router-dom"
import { fetchAll } from "../../utils/fetchAll"
import { fetchByCategory } from "../../utils/fetchByCategory"
import Filters from "../Filters/Filters"
import ItemCard from "../ItemCard.jsx/ItemCard"
import './ItemList.css'

export default function ItemList() {

    const {categoryId} = useParams()


    const [itemList, setItemList] = useState([])

    const fetchData = async () => {
        const url = window.location.href

        if (url.includes("category")) {
            return(
                await fetchByCategory(categoryId)
                    .then(data => setItemList(data))
                    .catch(err => console.log(err))
            )
        } else {
            return (
                await fetchAll()
                .then(data => setItemList(data))
                .catch(err => console.error(err))
            )
        }
    }

    useEffect(() => {
        fetchData()
    }, [categoryId])

    return(
        <div className="item-list">
            <Filters/>
            {
                itemList.map(item => {
                    return(
                        <ItemCard key={item.id} item={item}/>
                    )
                })
            }
        </div>
    )
}