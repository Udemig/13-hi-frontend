const Error = ({ info }) => {
  return (
    <div
      className="container-fluid bg-light d-flex align-items-center justify-content-center"
      style={{ marginTop: "230px" }}
    >
      <div className="text-center">
        <i className="bi bi-exclamation-triangle display-1 text-warning mb-3"></i>

        <h4>Kitap Bulunamadı</h4>

        <p className="text-muted mb-4">{info || "Aradığını kitap mevcut değil"}</p>

        <button className="btn btn-primary">Kitaplara Dön</button>
      </div>
    </div>
  );
};

export default Error;
