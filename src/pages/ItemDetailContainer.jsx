import React, {useState,useEffect} from 'react'
import { FetchOne } from "../utils/firebaseConfig"
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'
//import { getDoc, doc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {

      FetchOne(itemId).then((result) => setItem(result))
                      .catch((error) => console.log(error));

        console.log(item)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId]);

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}