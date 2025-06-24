const Loader = () => {
  return (
    <div
      className="container-fluid bg-light d-flex align-items-center justify-content-center"
      style={{ marginTop: "280px" }}
    >
      <div className="text-center">
        <div className="spinner-border text-primary mb-3"></div>
        <p className="text-muted">Kitaplar Yükleniyor...</p>
      </div>
    </div>
  );
};

export default Loader;
