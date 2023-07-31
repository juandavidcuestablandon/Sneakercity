

const NovedadesInfo = ({nombre, descripcion , imagen , btn}) => {
  return (
    <section className="info">
    <div>
         <img src={imagen} alt={nombre}  className="imgnovedades"/>
      </div>
     <div className="text">
       <h5 className="card-title">{nombre}</h5>
       <p className="card-text">{descripcion}</p>
       <a href={btn} className="btn btn-primary">Leer Mas!</a>
      </div>
  
    </section>
  )
}

export default NovedadesInfo