import { useState } from "react";
// src içerisindeki resimleri kullanabilemek için import etmek gerekir
import open from "../assets/open.png";
import closed from "../assets/closed.png";

const Lamb = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lamb">
      <h2 className="title">Lamba</h2>

      <p>Lamba şu anda: {isOpen ? "Açık" : "Kapalı"}</p>

      <img src={isOpen ? open : closed} width={300} height={400} />

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Kapat" : "Aç"}
      </button>
    </div>
  );
};

export default Lamb;
