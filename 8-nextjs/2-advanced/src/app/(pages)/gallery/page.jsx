import Image from "next/image";

// indirdik
import localImage from "../../assets/ocean.jpg";

// url'ini aldık
const remoteImage =
  "https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?_gl=1*5uffe3*_ga*NjI4NzE0NzIzLjE3NTk4NjM4OTU.*_ga_8JE65Q40S6*czE3NTk4NjM4OTUkbzEkZzEkdDE3NTk4NjQwMTkkajI0JGwwJGgw";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1>Local Resim (Optimizasyon Yok)</h1>
        <Image src={localImage} alt="okyanus" unoptimized />
        {/*   Size: 7020px x 3160px  |  Boyut: 3.1 MB  |  Format: JPG */}
      </div>

      <div>
        <h1>Local Resim (Optimizasyon Var)</h1>
        <Image
          src={localImage}
          alt="okyanus"
          quality={99}
          priority
          placeholder="blur"
        />
        {/*  Size: 3020px x 1360px | Boyut: 570 KB | Format: WEBP */}
      </div>

      <div>
        <h1>Remote Resim</h1>

        <Image src={remoteImage} alt="Okyanus" width={1280} height={720} />
      </div>

      <div>
        <h1>Remote Resim (Full Genişlik)</h1>

        <div className="relative h-[300px]">
          <Image src={remoteImage} alt="Okyanus" fill />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
