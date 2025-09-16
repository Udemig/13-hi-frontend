import { type FC } from "react";
import type { Car } from "../../types";
import { motion, stagger } from "motion/react";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: "/steering-wheel.svg",
      text: car?.trany || "Bilinmiyor",
    },
    {
      icon: "/tire.svg",
      text: car?.drive || "Bilinmiyor",
    },
    {
      icon: "/calendar.svg",
      text: car?.year || "Bilinmiyor",
    },
  ];

  // animasyon ayarları
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2 },
    }),
  };

  return (
    <div className="flex-between">
      {arr.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex-center flex-col gap-1"
        >
          <img src={item.icon} width={25} height={25} />
          <p>{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
