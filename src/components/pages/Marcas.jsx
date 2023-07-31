import { useState } from "react";
import data from "../data.json";
import Card from "../Card";

const Marcas = () => {

  const [marca, setMarca] = useState([]);


  const brands = (e) => {
    const selectedBrand = e.target.innerText;
    const filteredSneakers = data.sneakers.filter(
      (sneaker) => sneaker.marca === selectedBrand
    );
    setMarca(filteredSneakers);
  };


 
  return (
    <div>
      <h1>Nuestras Marcas</h1>

      <div>
      <button className="btnbrand " onClick={brands}>Nike </button>
      <button className="btnbrand" onClick={brands}>Puma </button>
      <button className="btnbrand" onClick={brands}>Adidas </button>
      <button className="btnbrand" onClick={brands}>New Balance </button>
      <button className="btnbrand" onClick={brands}>Jordan </button>
      <button className="btnbrand" onClick={brands}>Gucci </button>
      <button className="btnbrand" onClick={brands}>Balenciaga </button>
      <button className="btnbrand" onClick={brands}>Louis Vuitton </button>
      <button className="btnbrand" onClick={brands}>Dior </button>
      <button className="btnbrand" onClick={brands}>Givenchy </button>
      <button className="btnbrand" onClick={brands}>Versace </button>
      <button className="btnbrand" onClick={brands}>Fendi </button>
      <button className="btnbrand" onClick={brands}>Prada </button>
      <button className="btnbrand" onClick={brands}>Burberry </button>
      <button className="btnbrand" onClick={brands}>Chanel </button>
      <button className="btnbrand" onClick={brands}>Off-White </button>
      <button className="btnbrand" onClick={brands}>Alexander McQueen </button>
      <button className="btnbrand" onClick={brands}>Hermes </button>
      <button className="btnbrand" onClick={brands}>Converse </button>
      <button className="btnbrand" onClick={brands}>Reebok </button>
      </div>


      <h2 className="m-5">Productos</h2>

        <div className="d-flex  flex-wrap justify-content-center">

       
      {marca.map((sneaker) => (
        <Card
          key={sneaker.id}
          precio={sneaker.precio}
          description={sneaker.descripcion}
          imagen={sneaker.imagen}
          className='m-5'
         
        />
      ))}

      </div>


    </div>
  );
};

export default Marcas;
