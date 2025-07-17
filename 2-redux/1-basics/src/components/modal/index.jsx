import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/actions/todoActions";
import api from "../../api";
import { toast } from "react-toastify";

const Modal = ({ isOpen, close, todo }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki text al
    const text = e.target[0].value.trim();

    // text yoksa uyarı ver
    if (!text) return alert("input boş olamaz");

    // -todo'nun text değerini güncelle
    const updatedTodo = {
      ...todo,
      text: text,
    };

    // api'a güncelleme isteği at
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      // api isteği başarılı
      .then(() => {
        // aksiyon'u dispatch edip reducer'a haber gönderiyoruz
        dispatch(updateTodo(updatedTodo));
        toast("todo güncellendi");
      });

    // modalı kapat
    close();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 grid place-items-center w-full md:inset-0 h-screen max-h-full bg-zinc-600/30 backdrop-blur-sm">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Güncelle</h3>
              <button
                onClick={close}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Text
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    defaultValue={todo.text}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Todo'yu Güncelle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
