import type { FC } from "react";

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-6 rounded-[48px] h-fit">
      {images.map((image, key) => (
        <img
          src={image}
          alt="shoe"
          key={key}
          className="w-full h-full object-cover"
        />
      ))}
    </div>
  );
};

export default Images;
