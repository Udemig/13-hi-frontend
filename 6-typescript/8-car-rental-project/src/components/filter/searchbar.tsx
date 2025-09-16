import { useMemo, type FC } from "react";
import ReactSelect from "react-select";
import { makes, selectStyles } from "../../utils/constants";

const SearchBar: FC = () => {
  //  markalar dizisini react select'in istediği formata çevir
  const options = useMemo(() => makes.map((make) => ({ label: make, value: make })), []);

  return (
    <form className="searchbar flex gap-4 items-end justify-center">
      {/* Marka */}
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col">
          <label className="font-semibold mb-2 text-sm">Marka</label>

          <ReactSelect options={options} styles={selectStyles} />
        </div>
      </div>

      {/* Model */}
      <div></div>
    </form>
  );
};

export default SearchBar;
