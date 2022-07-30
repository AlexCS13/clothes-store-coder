import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import './NavBar.css'

export default function NavBar() {
    const { cartList } = useContext(CartContext)

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
                        <span>Cart </span>{cartList.length ? <span>{ cartList.length } item(s)</span> : null }
                    </Link>
                </li>
            </ul>
        </div>
    )
}