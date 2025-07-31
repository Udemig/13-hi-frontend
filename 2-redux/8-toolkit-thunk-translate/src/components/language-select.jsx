import Select from "react-select";
import { ArrowLeftRight } from "lucide-react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const LanguageSelect = () => {
  // react select stilleri
  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#3f3f46",
      borderColor: state.isFocused ? "#3b82f6" : "#52525b",
      borderWidth: "2px",
      borderRadius: "12px",
      minHeight: "48px",
      boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
      "&:hover": {
        borderColor: "#3b82f6",
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? "#3b82f6" : state.isFocused ? "#52525b" : "#3f3f46",
      color: state.isSelected ? "white" : "#e4e4e7",
      padding: "12px 16px",
      cursor: "pointer",
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#3f3f46",
      border: "1px solid #52525b",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: "#e4e4e7",
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      color: "#e4e4e7",
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: "#a1a1aa",
    }),
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-col lg:flex-row">
        {/* Kaynak Dil */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-zinc-300 mb-2">Kaynak Dil</label>
          <Select options={options} styles={customStyles} className="text-sm text-black" />
        </div>

        {/* Değiştirme Butonu */}
        <div className="flex items-center justify-center">
          <button className="size-10 lg:size-12 bg-zinc-700 hover:bg-zinc-600 disabled:bg-zinc-800 disabled:opacity-50 rounded-full flex items-center justify-center cursor-pointer group">
            <ArrowLeftRight />
          </button>
        </div>

        {/* Hedef Dil */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-zinc-300 mb-2">Hedef Dil</label>
          <Select options={options} styles={customStyles} className="text-sm text-black" />
        </div>
      </div>

      {/* Dil Sayısı */}
      <div className="text-center">
        <p className="text-xs text-zinc-500">170 dil destekleniyor</p>
      </div>
    </div>
  );
};

export default LanguageSelect;
