import { useContext } from "react";
import { SearchResults } from "../../../Context/DataContext";
import { RiDeleteBin5Line } from "react-icons/ri";

const Favorites = () => {
  const resultsfavorites = useContext(SearchResults);
  const favorites = resultsfavorites.favorite;

  const deleteFavorite = (nombre) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.nombre !== nombre);
    resultsfavorites.setFavorite(updatedFavorites);
  };

  return (
    <div>
      <h1>Tus Favoritos</h1>

      <main className="container">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="main">
            <div>
              <h2>{favorite.nombre}</h2>
            </div>
            <div>
              <img src={favorite.imagen} className="imgfav" alt={favorite.nombre} />
            </div>
            <div>
              <p>{favorite.description}</p>
              <p>Precio: {favorite.precio}</p>
            </div>

            <a>
              <RiDeleteBin5Line
                className="icon"
                onClick={() => deleteFavorite(favorite.nombre)}
              />
            </a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Favorites;