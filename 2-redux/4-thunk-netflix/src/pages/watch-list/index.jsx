import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/index";
import Error from "../../components/error/index";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../../utils/constants";
import { BookmarkMinus } from "lucide-react";
import { toggleWatchList } from "../../redux/actions/listActions";

const WatchList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, list } = useSelector((store) => store.listReducer);

  const handleDelete = (movie) => {
    dispatch(toggleWatchList(movie, false));
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold">İzleme Listesi</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-5 my-10">
          {list?.map((movie) => (
            <div className="relative group">
              <button
                onClick={() => handleDelete(movie)}
                className="hidden group-hover:block absolute top-3 end-3 bg-red-500 p-2 rounded hover:bg-red-600 transition z-10 shadow cursor-pointer"
              >
                <BookmarkMinus className="size-4" />
              </button>

              <Link to={`/movie/${movie.id}`}>
                <img
                  src={BASE_IMG_URL + movie.poster_path}
                  alt={movie.title}
                  className="rounded shadow group-hover:scale-[101%] object-cover transition"
                />
              </Link>

              <h1 className="text-xl text-center font-semibold mt-3 group-hover:text-shadow-lg text-shadow-white/20 transition">
                {movie.title}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
