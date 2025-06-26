import { useRef } from "react";

const Scroll = () => {
  // boş bir referans oluşturuyoruz
  const topRef = useRef(null);

  // başa dön butponuna tıklanınca çalışır
  const scrollToTop = () => {
    // topRef ile tutulan element ekrana gelene kadar sayfayı kaydırır
    topRef.current.scrollIntoView();
  };

  return (
    <div className="mt-5">
      <h3>Örnek - 2: DOM Elementlerine Erişim</h3>
      <p>
        <b>Açıklama:</b> sayfanın en aşşağısına kaydırmış olan kullanıcıyı yukarıya geri göndermek için useRef'le
        yönlendirmek istediğimiz elemanı seçeriz
      </p>

      <h3 className="my-5">⬆️ Sayfanın Başı</h3>

      <div className="d-grid gap-5">
        {new Array(20).fill(1).map((item, i) => (
          <div ref={i === 3 ? topRef : null} className="card card-body text-black">
            Card
          </div>
        ))}
      </div>

      <h3 className="mt-5">⬇️ Sayfanın Sonu</h3>

      <div className="d-flex justify-content-center">
        <button onClick={scrollToTop} className="btn btn-primary my-5">
          ⬆️ Başa Dön
        </button>
      </div>
    </div>
  );
};

export default Scroll;
