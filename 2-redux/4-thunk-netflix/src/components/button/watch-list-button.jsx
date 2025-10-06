import { Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/actions/listActions";

const WatchListButton = ({ movie }) => {
  const dispatch = useDispatch();

  // izleme listesi verisini reducer'dan al
  const { list } = useSelector((store) => store.listReducer);

  // ekrana basılan film izleme listesinde var mı?
  const isAdded = list.find((item) => item.id === movie.id);

  // butona tıklanam olayında çalışır
  const handleClick = () => {
    // listede zaten varsa kaldır yoksa ekle
    dispatch(toggleWatchList(movie, !isAdded));
  };

  return (
    <button
      onClick={handleClick}
      className="py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/50 min-w-[165px] flex items-center justify-center gap-2 font-medium cursor-pointer"
    >
      {!isAdded ? (
        <>
          <Plus className="size-5" />
          Listeye Ekle
        </>
      ) : (
        <>
          <Minus className="size-5" />
          Listeden Kaldır
        </>
      )}
    </button>
  );
};

export default WatchListButton;
