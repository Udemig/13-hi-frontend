import { PiVirus } from "react-icons/pi";

const Item = ({ color, text, value }) => {
  return (
    <div className="flex gap-4 items-center">
      <PiVirus role="img" className={`${color} text-2xl md:text-5xl max-sm:hidden`} />

      <div>
        <span role="span" className="text-gray-500 text-sm lg:text-base whitespace-nowrap">
          {text}
        </span>

        <h2 className="text-lg md:text-2xl">{value}</h2>
      </div>
    </div>
  );
};

export default Item;
