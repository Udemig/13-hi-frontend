const Form = () => {
  // Form gönderilince çalışan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // sayfa yenilemesini engelle

    // yeni todo nesnesi oluştur
    const newTodo = {
      title: e.target[0].value,
      category: e.target[1].value,
    };

    //todo: yeni todo verisini kaydet
    console.log(newTodo);
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
