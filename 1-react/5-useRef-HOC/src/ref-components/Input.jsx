import { useRef } from "react";

const Input = () => {
  // useRef kurulum
  const inputRef = useRef(null);

  // odaklan butonuna tıklanınca çalışır
  const handleFocus = () => {
    // fonksiyon içerisinde input elementine erişmek için react yazmıyor olsaydık getElementById vs. kullanırdık ama react'ta useRef kullanılır
    inputRef.current.focus();
    inputRef.current.style.background = "crimson";
  };

  // temizle butonuna tıklanınca
  const handleClear = () => {
    inputRef.current.style.background = "white";
    inputRef.current.value = "";
  };

  return (
    <div className="mb-5">
      <h3>Örnek - 1: DOM Elementlerine Erişim</h3>
      <p>
        <b>Açıklama:</b> useRef ile input elementine direkt erişim saplayıp focus yapabilir ve stilini değiştirebilirz
      </p>

      {/* ref propuyla useRef ile oluşturduğumuz referansa input elementini aktardık */}
      <input ref={inputRef} type="text" placeholder="Buraya yazın" className="form-control" />

      <button onClick={handleFocus} className="btn btn-primary mt-4">
        Odaklan
      </button>
      <button onClick={handleClear} className="btn btn-warning mt-4 ms-3">
        Temizle
      </button>
    </div>
  );
};

export default Input;
