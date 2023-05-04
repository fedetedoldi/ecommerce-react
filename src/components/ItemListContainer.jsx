import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";

const ItemListContainer = (props) => {
  const { data, handlerUpdate } = props;
  const { id: idProduct, title, image, description, price, stock } = data;
  const [_stock, _setStock] = useState(stock || 0);
  const { removeToCart } = useContext(GeneralContext);

  const handlerActionAdd = () => {
    if (_stock > 0) {
      _setStock(_stock - 1);
      handlerUpdate();
    }
  };

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };

  const removeThisItem = () => {
    removeToCart(data);
  };

  return (
    <div className="card text-bg-light">
      <h5 className="card-header">
        {showShortValue(title, 25)}
        <button className="btn btn-outline-danger btn-sm" onClick={removeThisItem}>x</button>
        <NavLink to={`/products/detail/${idProduct}`}>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={handlerActionAdd}
          >
            + info
          </button>
        </NavLink>
      </h5>
      <img
        className="card-img-top"
        width={400}
        height={400}
        src={image}
        alt=""
      />
      <div className="card-body">
        <p className="text-muted"> {showShortValue(description)}</p>
        <p>
          $ {price} - Existencia: {_stock}
        </p>
        <button className="btn btn-outline-dark">Agregar</button>
      </div>
    </div>
  );
};

export default ItemListContainer;
