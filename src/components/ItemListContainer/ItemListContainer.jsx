import { useEffect, useState } from "react"
import { firebaseData } from "../../utils/firebaseConfig"
import { query, where, getDocs } from 'firebase/firestore'
import { useParams, Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

export default function ItemListContainer() {

    const [categories, setCategories] = useState([])
    const {categoryId} = useParams()
    // const getCategories = (data) => {
    //     const categories = data.map(item => item.category)
    //     setCategories(categories.filter((item,index) => categories.indexOf(item) === index))
    // }

    useEffect( () => {
        // const fetchData = async () => {
        //     const newData = []
        //     await firebaseData.forEach ( item => {
        //         newData.push (item.data())
        //     })
        //     getCategories(newData)
        // }
        // fetchData()
        const fetchData = async () => await(categoryId ? query(firebaseData, where('category', '==', categoryId)) : firebaseData)
        console.log(fetchData)
        // debugger
        getDocs(fetchData)
            .then(res => setCategories(res.docs.map(item => item.data())))
            .then(res => console.log(categories))
            .catch((error) => error('Error en la carga de productos'))

    },[categoryId])

    return(
        // <div>
        //     <h4>Filter by category</h4>
        //     {
        //         categories.map(category => {
        //                 return (
        //                     <Link to={`/category/${category}`} key={category}>
        //                         <p>{category}</p>
        //                     </Link>
        //                 )
        //         })
        //     }
        // </div>
        <div>
            <ItemList items={categories}/>
        </div>
    )
}