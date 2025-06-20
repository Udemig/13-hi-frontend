import { toast } from "react-toastify";
import api from "../utils/api";

const Form = ({ addTodo }) => {
  // Form gönderilince çalışan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // sayfa yenilemesini engelle

    // yeni todo nesnesi oluştur
    const newTodo = {
      title: e.target[0].value,
      category: e.target[1].value,
      date: new Date().getTime(),
    };

    // title değeri geçerli mi kontrol et
    if (!newTodo.title.trim()) return toast.warning("İçerik boş olamaz");

    // yeni todo verisini kaydet
    // api'a post isteği atarak yeni todo'yu veritabanına kaydet
    api
      .post("/todos", newTodo)
      // api isteği başarılı olursa arayüze yeni todo'nun eklenmesi için state'e ekliyoruz
      .then((res) => {
        addTodo(res.data);
        e.target.reset(); // formu sıfırla
        toast.success("Yeni todo oluşturuldu"); // bildirim gönder
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Yeni Öğe Ekle</h2>

      <div className="form-group">
        <label htmlFor="title">Başlık:</label>
        <input id="title" type="text" />
      </div>

      <div className="form-group">
        <label htmlFor="category">Kategori:</label>
        <select id="category">
          <option value="varsayılan">Varsayılan</option>
          <option value="günlük">Günlük</option>
          <option value="önemli">Önemli</option>
          <option value="iş">iş</option>
        </select>
      </div>

      <button>Ekle</button>
    </form>
  );
};

export default Form;
