import Link from "next/link";
import { data } from "../../../utils/constants";
import Image from "next/image";

const Wonders = () => {
  return (
    <div>
      <h1>Dünyanın 7 Harikası</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {data.map((item) => (
          <Link href={`/wonders/${item.id}`} key={item.id}>
            <Image
              src={item.src}
              alt={item.name}
              className="w-full aspect-square object-cover rounded-md"
              quality={20}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wonders;
