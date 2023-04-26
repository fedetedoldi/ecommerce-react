import React, { useState } from "react";

const ItemListContainer = (props) => {
  const { data, handlerUpdate } = props;
  const { title, description, price } = data;
  const [stock, setStock] = useState(10);

  const handlerActionAdd = () => {
    if (stock > 0) {
      setStock(stock - 1);
      handlerUpdate();
    } else {
      alert("No hay mas stock!!");
    }
  };

  return (
    <div className="card m-3">
      <div className="card-body">
        <p> {title} </p>
        <p> {description} </p>
        <p>$ {price} </p>
        <p> {stock} </p>
        <button className="btn btn-dark" onClick={handlerActionAdd}>Agregar</button>
      </div>
    </div>
  );
};

export default ItemListContainer;

//https://d2r9epyceweg5n.cloudfront.net/stores/001/698/478/products/remera-negra-hombre1-13d0f5bda838120d2316213666641926-640-0.png
