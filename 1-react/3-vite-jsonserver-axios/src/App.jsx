import { useEffect, useState } from "react";
import api from "./utils/api";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

const App = () => {
  // aratılan kelime
  const [searchTerm, setSearchTerm] = useState("");
  // api'ndan gelen todo verisininin
  const [todos, setTodos] = useState([]);
  // filtreleme sonucunda geriye kalan todoların
  const [filtredTodos, setFiltredTodos] = useState([]);

  // yeni todo verisini state'e ekleyen
  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  // elemanı state'den kaldıran fonksiyon
  const deleteTodo = (delete_id) => {
    // parametre olarka gelen id'li todoyu diziden kaldır
    const filtred = todos.filter((todo) => todo.id !== delete_id);

    // state'i güncelle
    setTodos(filtred);
  };

  // elemanın state'deki değerini güncelleyen fonksiypn
  const updateTodo = (id, updateData) => {
    // splice veriyi direkt değiştirdiği için todos verisinin kopyasını al
    const temp = [...todos];

    // güncellenicek elemanın id'si üzerinden dizideki sırasını bul
    const index = temp.findIndex((todo) => todo.id === id);

    // sırasını bildiğimiz elemanı güncelle
    temp.splice(index, 1, { id, ...updateData });

    // state'i güncelle
    setTodos(temp);
  };

  // Component'ın ekrana basılma anında çalışır
  useEffect(() => {
    // API'dan todo verilerini al ve state'e aktar
    api
      .get("/todos?_sort=date&_order=desc") //
      .then((res) => {
        setTodos(res.data);
        setFiltredTodos(res.data);
      });
  }, []);

  // Arama işlemi - searchTerm, todos her değiştiğinde çalışır
  useEffect(() => {
    // |todo'nun title değeri aratılan kelimeyi içeriyorsa veya
    // |todo'nun category değeri aratılan kelimeyi içeriyorsa filtrele
    const filtred = todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // filtrelenen todolar state'ini güncelle
    setFiltredTodos(filtred);
  }, [searchTerm, todos]);

  return (
    <div className="app-container">
      <header>
        <h1>TODO APP</h1>
        <p>Pratik için basit todo uygulaması</p>
      </header>

      {/* Yeni Todo ekleme formu */}
      <Form addTodo={addTodo} />

      {/* Arama Kutusu */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Öğe ara....    (başlık veya kategori)"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />

        {searchTerm && <button onClick={() => setSearchTerm("")}>Temizle</button>}
      </div>

      {/* Öğe Sayısı */}
      <div className="items-info">
        <p>
          Toplam {todos.length} todo içerisinden,{" "}
          {searchTerm ? `${filtredTodos.length} ${searchTerm} sonucu var` : `${filtredTodos.length} gösteriliyor`}
        </p>
      </div>

      {/* Todo'ları listele */}
      <div className="items-list">
        {filtredTodos.length === 0 ? (
          <p className="no-items">{searchTerm ? "Arama sonucu bulunamadı" : "Henüz todo eklenmedi"}</p>
        ) : (
          filtredTodos.map((todo) => (
            <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
