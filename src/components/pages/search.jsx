import { useContext } from "react";
import { SearchResults } from "../../Context/DataContext";
import Card from "../Card";


const Search = () => {
   
    const results = useContext(SearchResults);
  
    console.log(results.results);
  
    return (
    <div>
      <h1 className="m-5">Zapatillas Encontradas</h1>

      <div className="d-flex flex-wrap">
            {results.results.map((sneaker) => (
              

            <Card 
                key={sneaker.id}
                imagen={sneaker.imagen}
                precio={sneaker.precio}
                description={sneaker.descripcion}
                nombre={sneaker.nombre}

                />
        
        
            ))}
      </div>
      
      
      
    </div>
  )
}

export default Search