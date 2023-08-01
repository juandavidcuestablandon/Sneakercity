import { HiHeart } from 'react-icons/hi';
import { useContext } from 'react';
import { SearchResults } from '../Context/DataContext';
import { Link } from'react-router-dom';




const Card = ({ imagen , precio, description, nombre }) => {


const favorites = () => {

  // aun pendiente 
alert("Esta seguro que desea agregar a favoritos");
}


const results = useContext(SearchResults);


const info = (e) => {
results.setCart({nombre, imagen, precio, description})
console.log(e.target);

}

const datacart = () => {
  results.setCarBuy({imagen})

  }








    return (
      
      <section onClick={info} >
      
        <div className="card">
        <Link to="/product"><img src={imagen} className="card-img-top imgcard" alt={nombre} /></Link>
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{description}</p>
            <p>$ {precio}</p>
          </div>
          <div className="btnbox">
              <button onClick={datacart}>COMPRAR</button>
            <a  onClick={favorites}><HiHeart className='heart'/></a>  
            </div>
        </div> 
          
      </section> 
     
    );
  };
  
  export default Card;