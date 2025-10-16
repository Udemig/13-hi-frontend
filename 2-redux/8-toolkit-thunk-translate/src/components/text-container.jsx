import { ArrowRight, Volume2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translateSlice";
import Loader from "./loader";

const TextContainer = () => {
  const { isLoading, translatedText, textToTranslate, sourceLang, targetLang } =
    useSelector((store) => store.translate);
  const dispatch = useDispatch();

  // metni temizle
  const handleClear = () => {
    dispatch(setText(""));
  };

  // çevrilmiş metni kopyala
  const handleCopy = () => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText);
    }
  };

  // kaynak metni seslendir
  const handleSpeakSource = () => {
    // Eğer çevrilecek metin yoksa fonksiyonu sonlandır
    // Boş metni seslendirmeye çalışmanın önüne geçer
    if (!textToTranslate) return;

    // window.speechSynthesis: Tarayıcının yerleşik metin okuma API'si
    // cancel(): Halihazırda çalan tüm seslendirmeleri durdurur
    // Bu, yeni bir seslendirme başlatmadan önce önceki seslendirmenin kesintiye uğramasını sağlar
    window.speechSynthesis.cancel();

    // SpeechSynthesisUtterance: Seslendirilecek metni ve ayarları tutan bir nesne oluşturur
    // Parametre olarak seslendirilecek metni (textToTranslate) alır
    // Bu nesne üzerinde dil, ses tonu, hız gibi özellikler ayarlanabilir
    const utterance = new SpeechSynthesisUtterance(textToTranslate);

    // utterance.lang: Hangi dilde/aksanda konuşulacağını belirler
    // sourceLang.value: Redux state'inden gelen kaynak dil kodu (örn: 'tr', 'en', 'fr')
    // Eğer kaynak dil seçiliyse (undefined değilse), o dil kodunu kullan
    // Bu sayede metin doğru telaffuz ve aksanla seslendirilir
    if (sourceLang.value) {
      utterance.lang = sourceLang.value;
    }

    // window.speechSynthesis.speak(): Oluşturulan utterance nesnesini seslendirmeye başlar
    // Tarayıcının ses sentezleme motorunu kullanarak metni sesli olarak okur
    window.speechSynthesis.speak(utterance);
  };

  // çevrilmiş metni seslendir
  const handleSpeakTarget = () => {
    if (!translatedText) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(translatedText);

    if (targetLang.value) {
      utterance.lang = targetLang.value;
    }

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/* Kaynak Dil */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="source" className="text-sm text-zinc-300">
            Çevrilecek Metin
          </label>
          <div className="flex items-center gap-3">
            {textToTranslate && (
              <>
                <button
                  onClick={handleSpeakSource}
                  className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
                  title="Metni seslendir"
                >
                  <Volume2 className="size-4" />
                  Seslendir
                </button>
                <button
                  onClick={handleClear}
                  className="text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Temizle
                </button>
              </>
            )}
          </div>
        </div>

        <div className="relative">
          <textarea
            id="source"
            className="textarea"
            placeholder="Çevirmek istediğiniz metni buraya yazınız..."
            onChange={(e) => dispatch(setText(e.target.value))}
            value={textToTranslate}
          ></textarea>
          <div className="absolute bottom-2 right-2 text-xs text-zinc-500 bg-zinc-100">
            {textToTranslate.length} karakter
          </div>
        </div>
      </div>

      {/* İkon */}
      <div className="flex items-center justify-center lg:flex-col">
        <div className="size-8 lg:size-12 bg-blue-600 rounded-full grid place-items-center">
          <ArrowRight className="size-4 lg:size-6 text max-lg:rotate-90" />
        </div>
      </div>

      {/* Hedef Dil */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="target" className="text-sm text-zinc-300">
            Çevrilmiş Metin
          </label>
          <div className="flex items-center gap-3">
            {translatedText && (
              <>
                <button
                  onClick={handleSpeakTarget}
                  className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
                  title="Çeviriyi seslendir"
                >
                  <Volume2 className="size-4" />
                  Seslendir
                </button>
                <button
                  onClick={handleCopy}
                  className="text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Kopyala
                </button>
              </>
            )}
          </div>
        </div>

        <div className="relative">
          <textarea
            id="target"
            className="textarea text-gray-300"
            // placeholder="Çeviri burada görünecek..."
            disabled
            value={translatedText}
          ></textarea>

          {isLoading && <Loader />}

          {!isLoading && !translatedText && !textToTranslate && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-zinc-500 text-sm">Çeviri bekleniyor</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
