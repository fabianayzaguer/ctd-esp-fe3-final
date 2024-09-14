import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/:id`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <div className={theme}>
      <h1>Detail Dentist {id}</h1>
      {dentist ? (
        <div>
          <p><strong>Nombre:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Telefono:</strong> {dentist.phone}</p>
          <p><strong>itio web:</strong> <a href={dentist.website} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </div>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};

export default Detail;
