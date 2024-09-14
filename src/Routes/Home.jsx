import { useContext, useState, useEffect } from 'react'; 
import { ThemeContext } from '../Contexts/ThemeContext';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Fetch dentistas from API
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Cambia esta URL por la URL de tu API
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
