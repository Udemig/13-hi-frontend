import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative mt-6 md:mt-8 xl:mt-12">
      <div className="absolute top-1/2 transform -translate-y-1/2 p-4 flex flex-col sm:p-6 md:p-10">
        <p className="text-grey text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[24px]">
          Sadece geçerli süreyle
        </p>

        <h1 className="font-semibold text-white text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
          %30 indirim
        </h1>

        <p className="text-grey text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[24px] md:max-w-[70%]">
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>

      <img src="/banner.png" alt="banner" className="w-full min-h-[160px]" />
    </div>
  );
};

export default Hero;
