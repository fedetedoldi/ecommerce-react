import React from "react";
import ListOptionNavBar from "./ListOptionNavBar";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
    const nameOptions = ["Inicio", "Productos", "Contacto"];
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <img width={50} height={50} src="https://previews.123rf.com/images/angelp/angelp1611/angelp161101147/68887708-tienda-tienda-icono-fondo-negro-con-blanco-ilustraci%C3%B3n-del-vector.jpg" alt="logo" />
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ListOptionNavBar nameOption={nameOptions} />
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;