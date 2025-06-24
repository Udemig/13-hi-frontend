import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5 page">
      <div className="justify-content-center">
        <div className="welcome-container text-center">
          <div className="mb-4">
            <i className="bi bi-book display-1 text-primary mb-4"></i>
            <h1 className="display-4 fw-bold text-primary mb-3">Kitap Kurdu'na Hoş Geldiniz</h1>
            <p className="lead text-muted mb-4">
              Binlerce kitap arasından favorilierinizi keşfedin ve okuma serüveninize başlayın
            </p>
          </div>

          <div className="mb-4">
            <img
              src="/welcome.webp"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "500px", width: "100%" }}
            />
          </div>

          <div className="d-grid gap-3 d-md-flex justify-content-md-center">
            <Link to="/products" className="btn btn-primary btn-lg px-4 py-2 me-3">
              <i className="bi bi-journal-text me-2"></i>
              Kitaplara Göz At
            </Link>
            <Link to="/category" className="btn btn-outline-primary btn-lg px-4 py-2 me-3">
              <i className="bi bi-grid me-2"></i>
              Kategorileri İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
