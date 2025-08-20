import { useState } from "react";

const Button = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <button role="button" style={{ background: isRed ? "red" : "aqua" }} onClick={() => setIsRed(!isRed)}>
      {isRed ? "Maviye Çevir" : "Kırmızıya Çevir"}
    </button>
  );
};

export default Button;
