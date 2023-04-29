import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
  return (
    <div>
      <FiShoppingCart />
      <Badge pill bg="light" text="dark">
        4
      </Badge>
    </div>
  );
};

export default CartWidget;
