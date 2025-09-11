import type { FC } from "react";
import Button from "../button";

const Hero: FC = () => {
  return (
    <div className="hero padding-x padding-y">
      <div className="pt-20 xl:flex-1 max-h-[920px]">
        <h1 className="hero-title">Özgürlüğü Hisset, Yolculuğa Başla</h1>

        <p className="hero-subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç kiralama deneyimini Altın Seçenekleri ile
          taçlandırarak her anını özel kılabilirsin.
        </p>

        <Button text="Arabaları Keşfet" designs="mt-12" />
      </div>

      <div className="flex justify-center items-center">
        <div className="relative max-md:min-h-[250px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-accent/30 rounded-full blur-3xl -z-10" />
          <img src="/hero.png" className="object-contain xl:w-[600px] xl:h-[477px] drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
