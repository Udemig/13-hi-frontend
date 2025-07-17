import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../../redux/actions/todoActions";
import api from "../../api";
import { toast } from "react-toastify";

const Form = () => {
  // dispatch methodunun kurulumu
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    // safaya yenilenmesini engelle
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // kaydedilecek todo nesnesini oluştur
    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };

    // api'a yeni todo oluşturma isteği at
    api.post("/todos", newTodo).then(() => {
      // aksiyonu dispatch et
      dispatch(addTodo(newTodo));
      toast.success("Yeni todo oluşturuldu");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 my-6">
      <input
        type="text"
        placeholder="Bir şeyler yazın...."
        className="bg-zinc-500 border border-zinc-400 text-white rounded-md p-2 flex-1 outline-none"
      />

      <button type="su" className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-500 cursor-pointer transition">
        Ekle
      </button>
    </form>
  );
};

export default Form;
