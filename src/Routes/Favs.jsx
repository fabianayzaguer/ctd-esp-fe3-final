import { useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from '../Contexts/ThemeContext'; // Asegúrate de que la ruta sea correcta

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  
  // Obtener los dentistas destacados del localStorage
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme}`}>
        {favs.length > 0 ? (
          favs.map(dentist => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        ) : (
          <p>No favorite dentists found.</p>
        )}
      </div>
    </>
  );
};

export default Favs;

