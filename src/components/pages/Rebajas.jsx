import { useState, useEffect } from "react";
import Card from "../Card";
import data from "../data.json";

const Rebajas = () => {
  const [rebajaItem, setRebajaItem] = useState([]);

  useEffect(() => {
    if (data && data.sneakers) {
      const filteredSneakers = data.sneakers.filter(
        (sneaker) => typeof sneaker.precio === "number" && sneaker.precio < 100
      );
      setRebajaItem(filteredSneakers);
    }
  }, []);

  return (
    <div>
      <h1 className="m-5">Nuestras Rebajas</h1>

      <div className="d-flex  flex-wrap justify-content-center  rebajas"> 
        {rebajaItem.map((sneaker) => {
        return (
          <Card
            key={sneaker.id}
            id={sneaker.id}
            nombre={sneaker.nombre}
            precio={sneaker.precio}
            imagen={sneaker.imagen}
            
          />
        );
      })}
      
      </div>
      
    </div>
  );
};

export default Rebajas;