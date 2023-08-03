import { HiHeart } from 'react-icons/hi';
import {BiHappyHeartEyes} from 'react-icons/bi'
import { useContext , useState } from 'react';
import { SearchResults } from '../Context/DataContext';
import { Link } from'react-router-dom';




const Card = ({ imagen , precio, description, nombre }) => {
  
  const [cart , setcart] = useState('COMPRAR');

 
  const results = useContext(SearchResults);
  const [favoriteIcon , setFavoritesIcon] = useState(<HiHeart className='heart' />);

  const favorites = () => {
   setFavoritesIcon(<BiHappyHeartEyes  className='happy'/>)
   results.setFavorite((prevShoe) => [ ...prevShoe,...[{nombre, imagen, precio, description}]]);
  
}
const info = () => {
results.setCart({nombre, imagen, precio, description})


}

const datacart = () => {
  results.setCarBuy({imagen})
   setcart('Agregado al carrito');

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
              <button onClick={datacart}>{cart}</button>
            <a onClick={favorites}>{favoriteIcon}</a> 
            </div>
        </div> 
          
      </section> 
     
    );
  };
  
  export default Card;