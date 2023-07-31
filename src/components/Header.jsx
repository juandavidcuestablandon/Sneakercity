import logo from './image/logo.png';
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';



const Header = () => {
  return (
    <header  className='d-flex justify-content-between align-items-center'>
           <Link  to='/'><img className='img' src={logo} alt={logo} /></Link>
           <Link  to='/'></Link>
           

           <nav>
            <ul className='d-flex gap-3'>
            <li><Link to="/">INICIO</Link></li>

              <li><Link to="/sneakers">ZAPATILLAS</Link></li>
              <li><Link to="/brands">MARCAS</Link>

              </li>
              <li><Link to="/news">NOVEDADES</Link></li>
              <li><Link to="/sales" className='text-danger'>REBAJAS</Link></li>   
            </ul>
           </nav>

           <div className="d-flex gap-3 align-items-center">
            <form >
              <input type="text" placeholder="BUSCAR" />
              <button type="submit" className='ms-3 btn'>BUSCAR</button>

            </form>
            <BsCart4 className='icon' />
            <FaRegUser className='icon' />
           </div>


    </header>
  )
}

export default Header