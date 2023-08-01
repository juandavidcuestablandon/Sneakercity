import data from '../data.json'
import Card from '../Card'
const Zapatillas = () => {
return (
    <div className='products'>

    {
      data.sneakers.map((item) => (
        <Card key={item.id}
        imagen={item.imagen}
          precio={item.precio}
           description ={item.descripcion}
           nombre={item.nombre}
           className='product'
           
         />
      ))
    }
     </div>
  
  )
}

export default Zapatillas