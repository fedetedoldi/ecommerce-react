import React, { Fragment, useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemListContainer from "../components/ItemListContainer";

const DetailCartView = () => {
  const { cart } = useContext(GeneralContext);
  return (
    <Fragment>
      <div className="container mt-3" >
        {cart.map((item,index) => (
          <ItemListContainer key={index} data={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default DetailCartView;
