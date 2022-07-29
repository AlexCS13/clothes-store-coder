import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {

    const navbarItems = ["Home", "Cart"]

    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    )
}