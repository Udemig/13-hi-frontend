import { useState } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";

const ListItem = ({ todo, deleteTodo, updateTodo }) => {
  // Düzenleme modunda mıyız state'i
  const [isEditing, setIsEditing] = useState(false);

  // Kategori rengini belirleme fonksiyonu
  const getColor = (category) => {
    const colors = {
      günlük: "#77DD77",
      iş: "#4ecdc4",
      önemli: "crimson",
    };

    // bracket notion
    return colors[category] || "#95a5a6";
  };

  // silme butonuna tıklanınca çalışıcak fonksiyon
  const handleDelete = () => {
    // kullanıcıdan onay iste: vermezse fonksiyonu durdur
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // api'a todo'yu kaldırma isteği at
    api
      .delete(`/todos/${todo.id}`)
      // istek başarılı olursa todo'yu state'den kaldır
      .then(() => {
        deleteTodo(todo.id);
        toast.error("Todo kaldırıldı");
      });
  };

  // düzenlemeyi kaydet butonuna tıklanınca çalışıcak fonksiyon
  const handleEdit = (e) => {
    e.preventDefault();

    // formdan güncel değerleri al
    const updateData = {
      title: e.target[0].value,
      category: e.target[1].value,
      date: new Date().getTime(),
    };

    // title değeri boşsa fonksiyonu durdur ve uyarı ver
    if (!updateData.title.trim()) return toast.warning("İçerik boş olamaz");

    // api isteği at
    api
      .patch(`/todos/${todo.id}`, updateData)
      // api isteği başarılı olursa:
      .then(() => {
        // state'i güncelle
        updateTodo(todo.id, updateData);
        // düzenleme modunu kapat
        setIsEditing(false);
        // bildirim gönder
        toast.info("Todo güncellendi");
      });
  };

  // eğer düzenleme modundaysak bu içerik renderlanır
  if (isEditing) {
    return (
      <div className="list-item">
        <form onSubmit={handleEdit} className="edit-form">
          <div className="edit-inputs">
            <input defaultValue={todo.title} type="text" placeholder="başlık" />

            <select defaultValue={todo.category}>
              <option value="varsayılan">Varsayılan</option>
              <option value="günlük">Günlük</option>
              <option value="önemli">Önemli</option>
              <option value="iş">İş</option>
            </select>
          </div>

          <div className="item-actions">
            <button>Kaydet</button>
            <button onClick={() => setIsEditing(false)}>İptal</button>
          </div>
        </form>
      </div>
    );
  }

  // eğer düzenleme modunda değilsek bu içerik renderlanır
  return (
    <div className="list-item">
      <div className="item-content">
        <h3 className="item-title">{todo.title}</h3>

        <div className="item-details">
          <span style={{ background: getColor(todo.category) }} className="item-category">
            {todo.category}
          </span>
          <span className="item-date">
            {new Date(todo.date).toLocaleDateString("tr", {
              day: "2-digit",
              month: "long",
            })}
          </span>
        </div>
      </div>

      <div className="item-actions">
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Düzenle
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default ListItem;
