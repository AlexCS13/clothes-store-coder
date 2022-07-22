import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemList from "./components/ItemList/ItemList";
import NavBar from "./components/NavBar/NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <hr/>
        <Routes>
            <Route exact path='/' element={<ItemList/>} />
            <Route exact path='/category/:categoryId' element={<ItemList/>} />
            <Route exact path='/item/:itemId' element={<ItemDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
