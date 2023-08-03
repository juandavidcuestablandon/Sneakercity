
import Card from "../Card";
import db from '../data.json'

const NovedadesItems = () => {
   
  return (
    
    <section className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="title">Novedades</h2>
    <div className=" items ">
          { 
      db.sneakers.slice(0,4).map((item) => {
  
        return (
            <Card  
            key={item.id}
            imagen={item.imagen}
            nombre={item.nombre}
            description={item.descripcion}
            precio={item.precio}            
            />
           
        );
        }) 

        }
    </div>


  

    </section>
  )
}

export default NovedadesItems