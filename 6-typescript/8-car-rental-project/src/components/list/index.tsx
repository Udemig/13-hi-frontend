import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../serivce";
import type { Car } from "../../types";
import Card from "./card";
import Warning from "./warning";
import Loader from "../loader";

const List: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<Car[] | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);

    fetchCars()
      .then((data) => {
        setCars(data.results);
        setTotalCount(data.total_count);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Warning>
        <Loader />
      </Warning>
    );

  if (error) return <Warning>Hata: {error}</Warning>;

  if (!cars || cars.length < 1) return <Warning>Araç verisi bulunamadı</Warning>;

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </section>
    </div>
  );
};

export default List;
