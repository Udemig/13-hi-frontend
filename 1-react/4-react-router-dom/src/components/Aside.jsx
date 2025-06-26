import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="card  shadow-sm">
      <div className="card-header bg-primary text-white">
        <h6>Kategoriler</h6>
      </div>

      <div className="card-body">
        <Link to="/category/story">Hikaye</Link>
        <br />
        <br />
        <Link to="/category/novel">Roman</Link>
      </div>
    </aside>
  );
};

export default Aside;
