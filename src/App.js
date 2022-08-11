import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart"
import './App.css';
import { CartContextProvider } from "./components/CartContext/CartContext";
import { ItemDetailContainer } from "./pages/ItemDetailContainer";
import ItemListContainer from "../src/pages/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <hr/>
            <Routes>
                <Route exact path='/' element={<ItemListContainer/>} />
                <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
                <Route exact path='/item/:itemId' element={<ItemDetailContainer/>} />
                <Route exact path='/cart' element={<Cart/>} />
            </Routes>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;