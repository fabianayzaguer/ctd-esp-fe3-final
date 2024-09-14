import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para la validación

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Agrega validación de props
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
