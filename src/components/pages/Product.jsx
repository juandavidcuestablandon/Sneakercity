
import { useContext, useState , useEffect} from "react"
import { SearchResults } from "../../Context/DataContext"
import data from '../data.json'
const Product = () => {

const [shoe, setShoe] = useState([])
 const result =  useContext(SearchResults)


 useEffect(() => {
    filter();
  }, [result.cart]); // Se activará cada vez que result.cart cambie

  const filter = () => {
    const filteredSneakers = data.sneakers.filter(
      (sneaker) => sneaker.imagen === result.cart.imagen
    );
    setShoe(filteredSneakers);

  };

  if (!shoe.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1 className="m-5">{shoe[0].marca}</h1>
     <div className="d-flex text">
        <div >
             <img src={result.cart.imagen} className="imgproduct" alt={result.cart.nombre} />  
        </div>
        <div className="p-5">
            <h2 className="titleproduct">{shoe[0].nombre}</h2>
            <h4 className="description">{shoe[0].descripcion}</h4>
            

            <div className="d-flex flex-column productshop">
          <label htmlFor="sizes">Selecciona una Talla</label>
            <select name="size" id="sizes">
           {shoe[0].tallas.map((talla, index) => (
                <option value={talla} key={index}>{talla}</option>
            ))}
            </select>
            </div>

        <div  className="d-flex flex-column productshop">
        <label htmlFor="colors">Selecciona un Color</label>
        <select name="color" id="colors">
           {shoe[0].colores.map((color, index) => (
                <option value={color} key={index}>{color}</option>
            ))}
            </select>  
    


        </div>


        <h4>{` Genero:  ${shoe[0].genero}`}</h4>


        <h4 className="mt-5 mb-5">{`Precio ${shoe[0].precio}`}</h4>

        <button className="btn buy">Comprar</button>
          

        </div>
        </div>
        
      
        
    </div>
  )
}

export default Product