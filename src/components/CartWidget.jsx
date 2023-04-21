import React from "react";
import { Badge } from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart />
      <Badge variant="primary" className="ml-1">
        4
      </Badge>
    </div>
  );
};

export default CartWidget;
