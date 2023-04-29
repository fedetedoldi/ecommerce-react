import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProducView";
import NavBar from "./components/NavBar";
import AboutView from "./views/AboutView";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={routes.root} element={<ProductsView />} />
        <Route path={routes.aboutView} element={<AboutView/>} />
        <Route path={routes.detailProductView} element={<DetailProductView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
