import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProducView";
import NavBar from "./components/NavBar";
import AboutView from "./views/AboutView";
import { routes } from "./routes";
import GeneralContext from "./context/GeneralContext";
import { useState } from "react";
import DetailCartView from "./views/DetailCartView";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeToCart = (item) => {
    const newArray = cart.filter((_item) => _item.id !== item.id);
    setCart(newArray);
  };

  return (
    <GeneralContext.Provider value={{ addToCart, cart, removeToCart }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={routes.root} element={<ProductsView />} />
          <Route
            path={routes.detailProductView}
            element={<DetailProductView />}
          />

          <Route path={routes.aboutView} element={<AboutView />} />
          <Route path={routes.detailCartView} element={<DetailCartView />} />
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
