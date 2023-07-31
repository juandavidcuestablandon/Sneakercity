
import Shoes1 from "./image/1.png";
import Shoes2 from "./image/2.png";
import Shoes3 from "./image/3.png";
import NovedadesItems from "./pages/NovedadesItems";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Shoes1} className="d-block w-100 banner" alt="nike1" />
            </div>
            <div className="carousel-item">
              <img src={Shoes2} className="d-block w-100 banner" alt="adidas" />
            </div>
            <div className="carousel-item">
              <img src={Shoes3} className="d-block w-100 banner" alt="newbalance" />
            </div>
          </div>
        </div>
      </section>

      <NovedadesItems />
    </>
  );
};

export default Banner;
