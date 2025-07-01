import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ product }) => {
  // basket contex'te abone olarak sepet verisine ve ekleme methoduna eriştik
  const { addToBasket, basket } = useContext(BasketContext);

  // prop olarak gelen ürünü sepette varsa bul
  const found = basket.find((i) => i.id === product.id);

  return (
    <div className="card py-2">
      <div className="d-flex justify-content-center">
        <img src={product.thumbnail} height={120} />
      </div>

      <div className="card-body d-flex flex-column gap-1 justify-content-between">
        <div className="d-flex flex-column gap-1">
          <h4>{product.title}</h4>

          <p className="d-flex gap-2">
            <span>Kategori:</span>
            <b>{product.category}</b>
          </p>

          <p className="d-flex gap-2">
            <span>Fiyat:</span>
            <b>${product.price}</b>
          </p>

          <p className="d-flex gap-2">
            <span>Rayting:</span>
            {"⭐️ ".repeat(Math.round(product.rating))}{" "}
          </p>
        </div>

        <button onClick={() => addToBasket(product)}>Sepete Ekle</button>
      </div>

      {found?.amount && <b className="basket-icon">🛒 ({found.amount})</b>}
    </div>
  );
};

export default Card;
