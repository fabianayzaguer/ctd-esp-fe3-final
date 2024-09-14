import { useState, useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'; // Asegúrate de que la ruta sea correcta

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { theme } = useContext(ThemeContext);

  const validateForm = () => {
    // Validar que el nombre completo tenga al menos 5 caracteres y no comience con un espacio
    if (name.trim().length <= 5) {
      setError('El nombre completo debe tener al menos 5 caracteres.');
      return false;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mostrar el mensaje de éxito
      setSuccessMessage(`Gracias ${name}, te contactaremos cuanto antes vía mail.`);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className={theme}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
