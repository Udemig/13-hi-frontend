import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../redux/actions/basketAction";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };

  const handleDelete = () => {
    product.amount > 1
      ? // ürünün miktarı 1'den fazla 1 azalt
        dispatch(updateItem(product.id, product.amount - 1))
      : // ürünün miktarı 1 ise sepetten kaldır
        dispatch(removeItem(product.id));
  };

  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className="mb-10 p-4 border rounded flex gap-4">
      <img src={product.photo} alt={product.title} className="size-[100px] rounded-lg" />

      <div className="w-full flex flex-col justify-between">
        <h1 className="text-xl font-semibold text-red-500">{product.title}</h1>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}₺</p>

          <div className="flex items-center gap-5">
            <div className="flex items-center border text-xl rounded-lg">
              <button onClick={handleDelete} className="basket-btn">
                <FaMinus />
              </button>
              <span>{product.amount}</span>

              <button onClick={handleAdd} className="basket-btn">
                <FaPlus />
              </button>
            </div>
            <button onClick={handleRemove} className="basket-btn">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
