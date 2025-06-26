// Hoc'lar kasadıklar (açılış / kapanış etiketleri içerisinde yer alan) içeriklere children propu aracılığıyla erişebilir
const Modal = ({ children, showButtons }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-2">
          {/* Kapatma Butonu */}
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark">X</button>
          </div>

          {/* Modal İçeriği */}
          <div className="my-4">{children}</div>

          {/* Butonlar */}
          {showButtons && (
            <div className="d-flex justify-content-end gap-3">
              <button className="btn btn-secondary">İptal</button>
              <button className="btn btn-success">Onayla</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
