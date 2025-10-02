import { Heart } from "lucide-react";
import type { FC } from "react";
import DOMPurify from "dompurify";

interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 footer-button">Sepete Ekle</button>
          <button className="footer-button">
            <Heart />
          </button>
        </div>
        <button className="footer-button bg-my-blue">Hemen Satın Al</button>
      </div>

      <div>
        <h2 className="font-semibold mb-2 mt-8 text-2xl text-dark-grey">
          Bu ürün hakkında
        </h2>

        {/*
         * api'dan gelen html verisi içerisine kötü amaçlı bir script enjekte edilebileceğinden (XSS)
         * dangerouslySetInnerHTML bu içeriği doğrudan ekrana bastığı için tehlike yaratabilir.
         * Dompurify.sanitize(), html içeriğini temizler ve bütün scriptleri kaldırır.
         * Bu sayede ortada herhangi bir tehlike kalmaz
         */}
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></div>
      </div>
    </div>
  );
};

export default Foot;
