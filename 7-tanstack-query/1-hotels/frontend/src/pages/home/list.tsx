import type { FC } from "react";
import { usePlaces } from "../../service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";

const List: FC = () => {
  // url'den gelen parametreleri al
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries()) as FilterParams;

  // api'dan verileri al
  const { data, isLoading, error, refetch } = usePlaces(params);

  // yükleniyorken loader göster
  if (isLoading) return <Loader />;

  // hata olursa hata mesajı göster
  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl mb-5">Yakınınızdaki Lokasyonlar</h1>

      <div className="grid gap-5 mt-5">
        {!data || data.length === 0 ? (
          <div className="my-10">
            <p className="text-center text-gray-500 ">Aradığınız lokasyon bulunamadı</p>
          </div>
        ) : (
          data?.map((place) => <Card key={place.id} place={place} />)
        )}
      </div>
    </div>
  );
};

export default List;
