import React from "react";

const Display = ({ count, increase }) => {
  console.log("Display component'ı render oldu");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
};

// Bu örnekte kapsayıcı olan example component'ının state'i her değiştiğinde kapsaycının render olmasıyla birlikte o state'i bu component'da kullanmıyor olsak bile diplay component'ı gereksiz yere render oluyor
// Bir component'ın aldığı proplar değişmediği müddetçe render olmasının önüne geçmek istersek React.Memo() kullanırız
// Kapsayıcı elementin render olmasından kaynaklı oluşan gereksiz renderları önleriz
export default React.memo(Display);
