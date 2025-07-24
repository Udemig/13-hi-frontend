import { Undo2 } from "lucide-react";
import { Link } from "react-router-dom";
import WatchListButton from "../../components/button/watch-list-button";

const Buttons = ({ movie }) => {
  return (
    <div className="flex mb-5 justify-between">
      <Link to={-1} className="bg-gray-600 hover:bg-gray-700 hero-btn px-5">
        <Undo2 className="size-5" />
        Geri
      </Link>

      <WatchListButton movie={movie} />
    </div>
  );
};

export default Buttons;
