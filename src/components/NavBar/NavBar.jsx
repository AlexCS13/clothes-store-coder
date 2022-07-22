import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {

    const navbarItems = ["Home", "Cart"]

    return(
        <div className="navbar">
            <ul>
                {
                    navbarItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to='/'>
                                    {item}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}