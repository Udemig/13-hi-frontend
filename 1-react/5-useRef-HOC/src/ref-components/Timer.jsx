import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  // sayacı başlat
  const startTimer = () => {
    setIsRunning(true);

    // her saniye seconds state'ini 1 arttır
    // daha sonra sayacı sıfırlamak için kullanıcağımız interval id'sini useRef ile tutuğumuz değişkene aktar
    intervalRef.current = setInterval(() => {
      setSeconds((previousValue) => previousValue + 1);
    }, 1000);
  };

  // sayacı durdur
  const stopTimer = () => {
    setIsRunning(false);

    // interval'ı temizler (useRef ile tutulan interval id'sine eriştik)
    clearInterval(intervalRef.current);
  };

  // sayacı temizle
  const clearTimer = () => {
    stopTimer(); // sayacı durdur
    setSeconds(0); // saniye değerini 0'a düşür
  };

  // component ekrandan ayrılınca sayacı durdur
  useEffect(() => {
    // component ekrana gelince çalışır

    // return () => {component ekrandan ayrılınca}
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-5">
      <h3>Örnek - 4: Değer Tutma</h3>
      <p>
        <b>Açıklama: Kronometre</b>
      </p>

      <div className="my-3">
        ⏰{" "}
        <strong>
          {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}
        </strong>
      </div>

      <div>
        <button disabled={isRunning} onClick={startTimer} className="btn btn-primary">
          {isRunning ? "Çalışıyor..." : "Başlat"}{" "}
        </button>

        <button disabled={!isRunning} onClick={stopTimer} className="btn btn-danger ms-2">
          Durdur
        </button>

        <button onClick={clearTimer} className="btn btn-warning ms-2">
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
