import logo from './image/logo.png';
import { Link } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md';
import data from "./data.json"
import {  useContext, useState} from 'react';
import { SearchResults } from '../Context/DataContext';
import Cart from './Cart';


const Header = () => {
  const results = useContext(SearchResults);
  const  sendData = (e) => {
   const value =  e.target.value
   const filteredSneakers = data.sneakers.filter(
      (sneaker) => sneaker.nombre.toLowerCase().includes(value.toLowerCase())
    );
    results.setResults(filteredSneakers);
  
  } 

  const [isOpen, setIsOpen] = useState(false)

return (
    <header  className='d-flex justify-content-between align-items-center'>
           <Link  to='/'><img className='img' src={logo} alt={logo} /></Link>

       

          
           
           <div className='d-flex align-items-center'>
             <nav>
             <ul className={`navbar ${isOpen && "open"}`}>

            <li><Link to="/">INICIO</Link></li>

              <li><Link to="/sneakers">ZAPATILLAS</Link></li>
              <li><Link to="/brands">MARCAS</Link>

              </li>
              <li><Link to="/news">NOVEDADES</Link></li>
              <li><Link to="/sales" className='text-danger'>REBAJAS</Link></li>   

              <div className="d-flex gap-3 align-items-center">
           
              <input type="text" placeholder="BUSCAR"  onChange={sendData}/>
              <Link  to="/search"><button className='ms-3 btn'>BUSCAR</button></Link>
             
             
               <Link to='/favorite'>< MdFavorite   className='icon' /></Link> 
           </div>
            </ul>

             
           </nav>

          

           <div className={`nav_toggle ${isOpen && "open"}`} onClick={ ()  => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
            </div>
              <Cart />
           </div>

         
        

    </header>
  )
}

export default Header