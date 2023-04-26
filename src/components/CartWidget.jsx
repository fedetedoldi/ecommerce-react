import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart />
      <Badge bg="light" text="dark">
        4
      </Badge>
    </div>
  );
};

export default CartWidget;
