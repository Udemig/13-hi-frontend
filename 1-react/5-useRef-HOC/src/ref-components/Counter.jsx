import { useState, useRef, useEffect } from "react";

const Counter = () => {
  // state her değiştiğinde component yeniden render olur
  const [countState, setCountState] = useState(0);
  // ref değiştiğinde ise herhangi bir şekilde rendera sebep olmaz
  const countRef = useRef(0);

  useEffect(() => {
    console.log("component render oldu");
  }, [countState]);

  return (
    <div className="mb-5">
      <h3>Örnek - 3: Değer Tutma</h3>
      <p>
        <b>Açıklama:</b> useState vs useRef karşılaştırmasında useState ile tutulan değer her değiştiğinde component
        yeniden render olurken useRef ile tutulan değerin değişmesi rendera sebep olmas
      </p>

      <h5>State: {countState}</h5>
      <h5>Ref: {countRef.current}</h5>

      <button
        onClick={() => {
          setCountState(countState + 1);
          // countRef.current++;
          console.log(countRef.current);
        }}
        className="btn btn-success"
      >
        Arttır (+1)
      </button>
    </div>
  );
};

export default Counter;
