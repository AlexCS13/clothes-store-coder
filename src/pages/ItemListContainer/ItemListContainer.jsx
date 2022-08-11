import { useEffect, useState } from "react"
import { firebaseData } from "../../utils/firebaseConfig"
import { query, where, getDocs} from 'firebase/firestore'
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import './ItemListContainer.css'

export default function ItemListContainer() {

    const [categories, setCategories] = useState([])
    const {categoryId} = useParams()


    useEffect(  () => {

        const fetchData = categoryId ? query(firebaseData, where('category', '==', categoryId)) : firebaseData

        getDocs(fetchData)
            .then(res => setCategories(res.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))))
            .catch((error) => error('Error en la carga de productos'))

    },[categoryId])
	// .then(res => setItem(res.docs.map(doc => ({
    //     id: doc.id,
    //     ...doc.data()
    // }))))
    return(
        <div>
            <ItemList items={categories}/>
        </div>
    )
}