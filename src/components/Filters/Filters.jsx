import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchAll } from "../../utils/fetchAll"


export default function Filters() {

    const [categories, setCategories] = useState([])

    const getCategories = (data) => {
        const categories = data.map(item => item.category)
            // .filter((item,index) => categories.indexOf(item) === index);
        setCategories(categories.filter((item,index) => categories.indexOf(item) === index))
    }

    useEffect(() => {
        fetchAll()
            .then(data => getCategories(data))
            .catch(err => console.log(err))
    },[])

    return(
        <div>
            <h4>Filter by category</h4>
            {
                categories.map(category => {
                        return (
                            <Link to={`/category/${category}`}>
                                <p>{category}</p>
                            </Link>
                        )
                })
            }
        </div>
    )
}