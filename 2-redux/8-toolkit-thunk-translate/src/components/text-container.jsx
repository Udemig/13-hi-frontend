import { ArrowRight } from "lucide-react";

const TextContainer = () => {
  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/* Kaynak Dil */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="source" className="text-sm text-zinc-300">
            Çevrilecek Metin
          </label>
          <button className="text-xs text-zinc-400 hover:text-zinc-200">Temizle</button>
        </div>

        <div className="relative">
          <textarea
            id="source"
            className="textarea"
            placeholder="Çevirmek istediğiniz metni buraya yazınız..."
          ></textarea>
          <div className="absolute bottom-2 right-2 text-xs text-zinc-500">123 karakter</div>
        </div>
      </div>

      {/* İkon */}
      <div className="flex items-center justify-center lg:flex-col">
        <div className="size-8 lg:size-12 bg-blue-600 rounded-full grid place-items-center">
          <ArrowRight className="size-4 lg:size-6 text" />
        </div>
      </div>

      {/* Hedef Dil */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="target" className="text-sm text-zinc-300">
            Çevrilmiş Metin
          </label>
          <button className="text-xs text-zinc-400 hover:text-zinc-200">Kopyala</button>
        </div>

        <div className="relative">
          <textarea id="target" className="textarea" placeholder="Çeviri burada görünecek..." disabled></textarea>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-zinc-500 text-sm">Çeviri bekleniyor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
