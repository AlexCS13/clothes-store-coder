import React, {useState,useEffect} from 'react'
import { firebaseData } from "../utils/firebaseConfig"
import { useParams } from 'react-router-dom'
// import { CartContext } from "../CartContext/CartContext"
import ItemDetail from '../components/ItemDetail/ItemDetail'
import { query, where, getDocs } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    // const {cartList} = useContext(CartContext)
    const [item, setItem] = useState([])

    useEffect(() => {

        const itemFilter = query( firebaseData, where('id', '==', itemId))
		getDocs(itemFilter)
            .then(res => setItem(res.docs[0].data()))
            .then(res => console.log(res))
            .catch((error) => error("Error al cargar productos"))
    }, [itemId])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}
