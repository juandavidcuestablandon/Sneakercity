import ima1 from './image/4.png'
import ima2 from "./image/5.png"
import ima3 from "./image/6.png"
import ima4 from "./image/7.png"


const Envio = () => {
  return (
    <section className='d-flex flex-column align-items-center'>
        <h2 className=' title'>Nuestros Envios</h2>
      <div className='containerbox'>
             <div className='box'>
         <img src={ima1} alt="atencionalcliente" className='img' />
        <h3>Atención  al cliente 24/7</h3>
        <p>Le mantendremos informado sobre el estado de su envío con actualizaciones periódicas y atención al cliente siempre disponible.</p>
        </div>
        <div className='box'>
         <img src={ima2} alt="contraentrega" className='img' />
        <h3>Envios Express</h3>
        <p>Envio gratias apartir de $60. Envios nacionales</p>
        </div>
        <div className='box'>
         <img src={ima3} alt="targetadecredito" className='img'/>
        <h3>Pago ContraEntrega</h3>
        <p>Le mantendremos informado sobre el estado de su envío con actualizaciones periódicas y atención al cliente siempre disponible.</p>
        </div>
        <div className='box'>
         <img src={ima4} alt="coche de entrega" className='img'/>
        <h3>Pagos Seguros 100%</h3>
        <p>Paypal- Targeta- Contrarembolso- Pago en Tienda </p>
        </div>
      </div>
   

    </section>
  )
}

export default Envio