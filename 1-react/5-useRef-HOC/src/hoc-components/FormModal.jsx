const Modal = () => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-2">
          {/* Kapatma Butonu */}
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark">X</button>
          </div>

          {/* Modal İçeriği */}
          <div className="my-4">
            <h4 className="mb-4">Hesap Oluştur</h4>
            <form>
              <div className="mb-4">
                <label className="form-label">Eposta</label>
                <input type="text" className="form-control" />
              </div>
              <div>
                <label className="form-label">Şifre</label>
                <input type="password" className="form-control" />
              </div>
            </form>
          </div>

          {/* Butonlar */}
          <div className="d-flex justify-content-end gap-3">
            <button className="btn btn-secondary">İptal</button>
            <button className="btn btn-success">Onayla</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
