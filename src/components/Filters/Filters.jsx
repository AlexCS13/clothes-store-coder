import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../utils/firebaseConfig"


export default function Filters() {

    const [categories, setCategories] = useState([])

    const getCategories = (data) => {
        const categories = data.map(item => item.category)
        setCategories(categories.filter((item,index) => categories.indexOf(item) === index))
    }

    useEffect( () => {
        const fetchData = async () => {
            const firebaseData = await getDocs(collection(db, "products"))
            const newData = []
            firebaseData.forEach (async item => {
                newData.push (item.data())
            })
            getCategories(newData)
        }
        fetchData()
    },[])

    return(
        <div>
            <h4>Filter by category</h4>
            {
                categories.map(category => {
                        return (
                            <Link to={`/category/${category}`} key={category}>
                                <p>{category}</p>
                            </Link>
                        )
                })
            }
        </div>
    )
}