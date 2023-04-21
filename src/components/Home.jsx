import React from "react";

export default function HomeContainer(props) {
  const { greeting } = props;
  return (
    <div className="saludo">
      Este es mi Ecommerce de {greeting} by CoderHouse
    </div>
  );
}
