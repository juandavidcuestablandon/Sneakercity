import { BsCart4 } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useId } from "react";
import data from "./data.json";
import { SearchResults } from "../Context/DataContext";
import { useEffect, useState, useContext } from "react";



const Cart = () => {
  const [shoebuy, setShoebuy] = useState([]);
  const [counter, setcounter] = useState(1);
  const results = useContext(SearchResults);
  
  
  
  console.log(results.carBuy);

  
  
  useEffect(() => {
    filter();
  }, [results.carBuy]); // Se activará cada vez que result.cart cambie

  const filter = () => {
    const filteredSneakers = data.sneakers.filter(
      (sneaker) => sneaker.imagen === results.carBuy.imagen 
                    
    );
    setShoebuy((prevShoe) => [ ...prevShoe,...filteredSneakers]);
  };

  if (!shoebuy.length) {
    console.log("cargando..");
  }

  const clearCar = () => {
    setShoebuy([]);
  };

  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <BsCart4 className="icon" />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {shoebuy.map((sneaker, index) => (
            <li key={index}>
              <img src={sneaker.imagen} alt={sneaker.nombre} />

              <div>
                <strong>{sneaker.nombre}</strong> - ${sneaker.precio}
              </div>
              <footer>
                <small>Qty : {counter}</small>
                <button onClick={() => setcounter(counter + 1)}>+</button>
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCar}>
          <RiDeleteBin6Fill />
        </button>
      </aside>
    </>
  );
};

export default Cart;
