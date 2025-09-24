import { useMemo, type ChangeEvent, type FC } from "react";
import { SORT_OPTIONS } from "../../utils/constants";
import { usePlaces } from "../../service";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  // inputtaki değeri url'e parametre olarak ekleyecek fonksiyon
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  // input'ları ve url'i temizle
  const handleClear = () => {
    setSearchParams({});
  };

  // konaklama noktlarının benzersiz location değerlerini al
  const locations = useMemo(() => [...new Set(data?.map((item) => item.location))], [data]);

  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
      <div className="field">
        <label>Nereye gitmek istiyorsunuz?</label>

        <select
          name="location"
          className="input"
          onChange={handleChange}
          defaultValue={searchParams.get("location") || ""}
        >
          <option value="">Seçiniz</option>
          {locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Konaklama noktası adı?</label>

        <input
          type="text"
          className="input"
          name="title"
          placeholder="örne:Seaside Villa"
          onChange={handleChange}
          defaultValue={searchParams.get("title") || ""}
        />
      </div>

      <div className="field">
        <label>Sıralama Ölçütü?</label>

        <select name="order" className="input" onChange={handleChange} defaultValue={searchParams.get("order") || ""}>
          <option value="">Seçiniz</option>
          {SORT_OPTIONS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="reset"
        onClick={handleClear}
        className="bg-blue-500 hover:bg-blue-600 transition text-white mt-3 p-1 cursor-pointer rounded-md"
      >
        Filtreleri Temizle
      </button>
    </form>
  );
};

export default Filter;
