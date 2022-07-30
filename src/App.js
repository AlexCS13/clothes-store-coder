import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemList from "./components/ItemList/ItemList";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart"
import './App.css';
import { CartContextProvider } from "./components/CartContext/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <hr/>
            <Routes>
                <Route exact path='/' element={<ItemList/>} />
                <Route exact path='/category/:categoryId' element={<ItemList/>} />
                <Route exact path='/item/:itemId' element={<ItemDetail/>} />
                <Route exact path='/cart' element={<Cart/>} />
            </Routes>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
