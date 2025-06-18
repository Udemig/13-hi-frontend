const ListItem = ({ todo }) => {
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
        <button className="edit-btn">Düzenle</button>
        <button className="delete-btn">Sil</button>
      </div>
    </div>
  );
};

export default ListItem;
