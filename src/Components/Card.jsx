
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    let favs = JSON.parse(localStorage.getItem("favs")) || [];

    if (!favs.find(fav => fav.id === id)) {
      favs.push({ name, username, id });
      localStorage.setItem("favs", JSON.stringify(favs));
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={`/images/doctor.jpg`} alt={100} className="card-image" style={{ width: '90%', height: 'auto'}}/>

      <p><Link to={`/dentist/${id}`}>{username}</Link></p>
      
      <button onClick={addFav} className="favButton"> ⭐</button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;
