import { useState } from "react";

const BuyList = () => {
  const [product, setProduct] = useState("");
  const [list, setList] = useState([]);

  const create = () => {
    // product state'inde tutulan ürünü list state'inde tutulan diziye ekle
    setList([...list, product]);

    // input içerisindeki yazııyı temizle
    setProduct("");
  };

  return (
    <div>
      <h2 className="title">Alışveriş Listesi</h2>

      <div className="form">
        <input
          type="text"
          value={product}
          placeholder="ürün adı"
          onChange={(event) => {
            setProduct(event.target.value);
          }}
        />

        <button disabled={!product.trim()} onClick={create}>
          Ekle
        </button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuyList;
