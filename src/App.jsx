import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
