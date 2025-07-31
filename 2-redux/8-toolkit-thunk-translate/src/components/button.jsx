import { Languages } from "lucide-react";

const Button = () => {
  return (
    <div className="flex justify-center mt-6">
      <button
        className={`relative px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
      >
        <div className="flex items-center gap-2">
          <Languages className="size-5" />
          <span>Çevir</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
