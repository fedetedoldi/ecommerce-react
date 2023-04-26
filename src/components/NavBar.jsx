import React from "react";
import ListOptionNavBar from "./ListOptionNavbar";

const NavBar = (props) => {
  const nameOptions = ["Remeras", "Buzos", "Pantalones"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          <img
            width={75}
            height={75}
            src="https://thumbs.dreamstime.com/b/icono-de-la-tienda-aislado-sobre-fondo-oscuro-logo-vector-simple-215014685.jpg"
            alt="logo tienda"
            srcSet=""
          />
        </span>
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
            <ListOptionNavBar nameOption={nameOptions} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
