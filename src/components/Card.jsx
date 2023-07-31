import { HiHeart } from 'react-icons/hi';

const Card = ({ imagen , precio, description, nombre }) => {
    return (
      <section  >
        <div className="card">
          <img src={imagen} className="card-img-top imgcard" alt={nombre} />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{description}</p>
            <p>$ {precio}</p>
          </div>
          <div className="btnbox">
              <button>COMPRAR</button>
              <HiHeart className='heart'/>
            </div>
        </div>
      </section>
    );
  };
  
  export default Card;