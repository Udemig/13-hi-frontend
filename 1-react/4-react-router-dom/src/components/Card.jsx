import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="position-relative">
        <img className="card-img-top" src={book.image} style={{ height: "250px", objectFit: "cover" }} />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate fw-bold">{book.title}</h5>
        <p className="card-text text-muted mb-3">
          <i className="bi bi-person me-1"></i>
          {book.author}
        </p>
        <div className="mt-auto">
          <Link to={`/detail/${book.id}`} className="btn btn-primary w-100">
            <i className="bi bi-eye me-2"></i>
            Detay'a Git
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
