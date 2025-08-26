import { MdKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderLoader from "../../components/loader/header-loader";

const Header = () => {
  const { isLoading, data } = useSelector((store) => store);

  console.log(data);
  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="bg-zinc-400 p-2 pe-3 rounded-md hover:bg-zinc-500 flex gap-2 items-center shadow text-white transition"
      >
        <MdKeyboardArrowLeft />
        Geri
      </Link>

      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4">
            <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold font-sans">{data.country}</h1>

            <img src={data.flag.png} alt={data.flag.alt} className="w-16 rounded" />
          </div>
        )
      )}
    </div>
  );
};

export default Header;
