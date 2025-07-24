import React from "react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error/index";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { BASE_IMG_URL } from "../../utils/constants";
import WatchListButton from "../../components/button/watch-list-button";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = {
      language: "tr",
      region: "TUR",
    };

    api
      .get("/movie/popular", { params })
      .then((res) => {
        // 0-19 arası rastgele sayı üret
        const i = Math.round(Math.random() * 19);

        // rastgele filmi state'a akte
        setMovie(res.data.results[i]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) return <Error info={error} />;

  return (
    <div className="grid md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold text-center">{movie.title}</h1>

        <p className="text-start text-gray-300 line-clamp-5">{movie.overview}</p>

        <p>
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">{movie.vote_average.toFixed(2)}</span>
        </p>

        <div className="flex gap-5">
          <Link to={`/movie/${movie.id}`} className="hero-btn">
            <Play className="size-4" />
            Filmi İzle
          </Link>

          <WatchListButton movie={movie} />
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={BASE_IMG_URL + movie.backdrop_path}
          alt={movie.title}
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 rounded object-contain max-h-[300px]"
        />
      </div>
    </div>
  );
};

export default React.memo(Hero);
