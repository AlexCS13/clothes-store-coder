import { collection, getDocs } from "firebase/firestore"
import { useEffect } from "react"
import { useState } from "react"
import {useParams} from "react-router-dom"
import { db } from "../../utils/firebaseConfig"
import Filters from "../Filters/Filters"
import ItemCard from "../ItemCard.jsx/ItemCard"
import './ItemList.css'

export default function ItemList() {

    const {categoryId} = useParams()


    const [itemList, setItemList] = useState([])

    const fetchData = async () => {
        const url = window.location.href
        const firebaseData = await getDocs(collection(db, "products"))
        const newData = []
        firebaseData.forEach (async item => {
            newData.push ({...item.data(), id:item.id})
        })

        if (url.includes("category")) {
            setItemList(newData.filter(item => item.category === categoryId))
        } else {
            setItemList(newData)
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