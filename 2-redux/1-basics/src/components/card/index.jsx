import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions/todoActions";
import { useState } from "react";
import Modal from "../modal";
import api from "../../api";
import { toast } from "react-toastify";

const Card = ({ todo }) => {
  // dispatch kurulum
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // -todo'yu kaldır
  const handleDelete = () => {
    api.delete(`/todos/${todo.id}`).then(() => {
      // silme aksiyonunu dispatch et
      dispatch(deleteTodo(todo.id));
      toast.warning("Todo silindi");
    });
  };

  // -todo isDone değerini güncelle
  const handleStatus = () => {
    // güncelleme isteği at
    api
      .patch(`/todos/${todo.id}`, { isDone: !todo.isDone })
      // api isteği başarılı olursa reducer'a haber ver
      .then(() => {
        dispatch(toggleTodo(todo.id));
      });
  };

  return (
    <>
      <div className="border border-zinc-700 rounded p-4 shadow-lg">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{todo.text}</h3>
          <h5>{todo.isDone ? "Tamamlandı" : "Devam Ediyor"}</h5>
          <h6 className="text">
            {new Date(todo.createdAt).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h6>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={() => setIsOpen(true)} className="btn bg-blue-500">
            Düzenle
          </button>

          <button onClick={handleStatus} className="btn bg-yellow-500">
            {todo.isDone ? "Geri Al" : "Tamamla"}
          </button>

          <button onClick={handleDelete} className="btn bg-red-500">
            Sil
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)} todo={todo} />
    </>
  );
};

export default Card;
