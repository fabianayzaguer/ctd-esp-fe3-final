import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'; 

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={theme}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={toggleTheme}>🌙</button>
    </nav>
  );
};

export default Navbar;
