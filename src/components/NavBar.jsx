import React from "react";
import ListOptionNavBar from "./ListOptionNavbar";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://fakestoreapi.com/products/categories";

const NavBar = (props) => {
  const {data} = useFetch(BASE_URL);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            width={100}
            height={100}
            src="https://thumbs.dreamstime.com/b/icono-de-la-tienda-aislado-sobre-fondo-oscuro-logo-vector-simple-215014685.jpg"
            alt=""
            srcSet=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ListOptionNavBar nameOption={data} />
            <button className="d-flex btn btn-outline-secondary">
              <CartWidget />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
