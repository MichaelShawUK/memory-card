import "../css/Card.css";

const Card = ({ player, onClick }) => {
  return (
    <img
      src={player.img}
      alt={player.name}
      className="card"
      onClick={onClick}
    ></img>
  );
};

export default Card;
