import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Detail = () => {
  // component'ın state'leri
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // urldeki parametreye eriş
  const { book_id } = useParams();

  // componet'ın ekrana basılma anın çalışır
  useEffect(() => {
    // api isteği atılacığı için yüklenme state'ini true'ya çeker
    setLoading(true);

    // parametreden gelen id'ye göre api'a kitap verileri için istek at
    axios
      .get(`http://localhost:4000/books/${book_id}`)
      // başarılı olursa:
      .then((res) => setBook(res.data))
      // başarısız olursa:
      .catch((err) => setError(err.message))
      // istek tamamlanınca:
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) return <Error info={error.message} />;

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        {/* Geri */}
        <div className="mb-3">
          <Link className="btn btn-outline-primary" to="/products">
            Geri Dön
          </Link>
        </div>

        {/* Card */}
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="row g-4">
              {/* Image */}
              <div className="col-lg-4 text-center">
                <img src={book.image} style={{ maxHeight: "400px" }} className="img-fluid rounded shadow-sm" />
              </div>

              {/* Bilgiler */}
              <div className="col-lg-8">
                <div className="mb-4">
                  <h1>{book.title}</h1>
                  <p className="lead text-muted mb-4">
                    <i className="bi bi-person-fill me-2"></i>
                    {book.author}
                  </p>
                </div>

                <div className="row g-3 mb-4">
                  <div className="info-item mb-3 col-sm-6">
                    <small className="text-muted text-uppercase fw-medium d-block mb-1">Yayın Yılı</small>
                    <div>{book.year}</div>
                  </div>
                  <div className="info-item mb-3 col-sm-6">
                    <small className="text-muted text-uppercase fw-medium d-block mb-1">Sayfa Sayısı</small>
                    <div>{book.page} sayfa</div>
                  </div>
                  <div className="info-item mb-3 col-sm-6">
                    <small className="text-muted text-uppercase fw-medium d-block mb-1">Fiyat</small>
                    <div>{book.price}</div>
                  </div>
                  <div className="info-item mb-3 col-sm-6">
                    <small className="text-muted text-uppercase fw-medium d-block mb-1">Durum</small>
                    <div>Stokta Var</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="fw-semibold mb-3">Açıklama</h5>
                  <p className="text-muted">{book.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
