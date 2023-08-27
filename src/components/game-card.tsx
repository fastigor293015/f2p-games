import { Link } from "react-router-dom";

interface GameCardProps {
  id: number;
  title: string;
  releaseDate: string;
  publisher: string;
  genre: string;
  img: string;
}

const GameCard: React.FC<GameCardProps> = ({ id, title, releaseDate, publisher, genre, img }) => {
  return (
    <Link to={`/game/${id}`} className="group">
      <div className="
        relative
        rounded-lg
        overflow-hidden
        after:content-normal
        after:absolute
        after:inset-0
        after:bg-white
        after:opacity-0
        group-hover:after:opacity-10
        group-focus:after:opacity-10
        after:transition-opacity"
      >
        <img src={img} alt="thumbnail" />
      </div>
      <div>
        <h2 className="font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default GameCard;
