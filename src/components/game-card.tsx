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
        mb-1
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
        <div className="absolute top-0 right-0 p-2 rounded-bl-lg rounded-tr-lg font-bold text-white bg-indigo-700/60">{genre}</div>
        <img src={img} alt="thumbnail" />
      </div>
      <div>
        <h2 className="font-bold truncate">{title}</h2>
        <p className="flex items-center justify-between gap-2 text-muted-foreground">
          <span className="flex-shrink truncate">
            {publisher}
          </span>
          {new Date(releaseDate).toLocaleDateString("ru-RU")}
        </p>
      </div>
    </Link>
  );
}

export default GameCard;
