import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "react-bootstrap";
import GeneralContext from "../context/GeneralContext";

const CartWidget = () => {

  const {cart} = useContext(GeneralContext);

  return (
    <div>
      <FiShoppingCart />
      <Badge pill bg="light" text="dark">
        {cart.length}
      </Badge>
    </div>
  );
};

export default CartWidget;
