import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const items = [
    {
      title: "Remera",
      description: "Negra Talle L",
      price: 100,
    },
    {
      title: "Buzo",
      description: "Rojo Talle XL",
      price: 200,
    },
    {
      title: "Pantalon",
      description: "Jean Talle L",
      price: 300,
    },
  ];

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1> Total: {count} </h1>
        {items.map((item, index) => {
          return (
            <ItemListContainer
              key={index}
              data={item}
              handlerUpdate={updateCount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
