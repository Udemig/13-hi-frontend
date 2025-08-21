import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ? </h3>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>
      </div>

      <p role="paragraph" className={isOpen ? "show" : "hide"}>
        Unit test en küçük yazılım testidir. Tek bir kod parçasının beklendiği gibi çalıştığını doğrulamak için
        kullanılır. Unit test genellikle otomatiktir ve geliştiriciler, her şeyin uygun şekilde çalıştığından emin olmak
        için geliştirme sürecinin bir parçası olarak testler gerçekleştirir.
      </p>
    </div>
  );
};

export default Accordion;
