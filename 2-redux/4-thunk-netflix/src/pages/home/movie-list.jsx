import { useEffect, useState } from "react";
import api from "../../utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BASE_IMG_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };

    api
      .get("/discover/movie", { params }) //
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>

      <Splide
        options={{
          gap: "20px",
          autoWidth: true,
          pagination: false,
          type: "loop",
        }}
      >
        {movies?.map((item) => (
          <SplideSlide>
            <Link to={`/movie/${item.id}`}>
              <img
                src={BASE_IMG_URL + item.poster_path}
                alt="Image 1"
                className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.01]"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
