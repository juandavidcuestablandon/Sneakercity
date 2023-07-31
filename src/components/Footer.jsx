import { FaInstagram } from 'react-icons/fa';
import { BsMeta} from 'react-icons/bs';
import {  FaYoutube} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='d-flex mt-5'> 

      <div  className='fbox'>
        <h4>Sobre Nosotros:</h4>
        <p>SneakerCity es la tienda en línea líder en zapatillas deportivas y moda urbana. Ofrecemos una amplia selección de marcas y estilos, garantizando la máxima calidad y el mejor estilo para nuestros clientes.</p>
      </div>
      <div className='fbox'>
        <h4>Contáctanos:</h4>
        <p>Telefono: 900 111 222</p>
        <p>Correo: SneakerCity@sneakercity.com</p>
        <p>Horario de Atención al Cliente: Lunes a Viernes de 9:00 AM a 6:00 PM (Hora local)</p>
      </div>
       <div className='fbox'>
        <h4>Nuestras Tiendas</h4>
        <p> Avenida de la Libertad #123</p>
        <p> Barcelona, España</p>
        <p> Calle Primavera #456</p>
        
        
       </div>

       <div className='fbox'>
        <h4>Síguenos en Redes Sociales:</h4>
        <div className='icons'>
          <FaInstagram  className=' icons'/>
          <BsMeta className=' icons'/>
          <FaYoutube className=' icons'/>

        <h5>By: Juandavidc.b</h5>
        </div>

       </div>

    </footer>
  )
}

export default Footer