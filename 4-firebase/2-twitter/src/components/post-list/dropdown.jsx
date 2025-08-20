import { FaEdit, FaTrash } from "react-icons/fa";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import EditModal from "../modal/edit-modal";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkBoxRef = useRef();

  // tweet'i gönderen kişi ile şuan oturumu açık olan kişi aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  // sil butonuna tıklanınca
  const handleDelete = () => {
    // kullanıcnının onayını al
    if (!confirm("Kaldırmak istediğinizden emin misiniz?")) return;

    // silincek dökümanın referansını al
    const docRef = doc(db, "tweets", tweet.id);

    // dökümanı kaldır
    deleteDoc(docRef)
      .then(() => toast.success("Döküman kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));

    // drowdown'ı kapat
    checkBoxRef.current.checked = false;
  };

  return (
    isOwn && (
      <>
        <label className="popup">
          <input type="checkbox" ref={checkBoxRef} />

          <div className="burger" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button type="button" onClick={() => setIsOpen(true)}>
                  <FaEdit />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button type="button" onClick={handleDelete}>
                  <FaTrash className="text-red-500" />
                  <span>Sil</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal
          isOpen={isOpen}
          close={() => {
            setIsOpen(false);
            checkBoxRef.current.checked = false;
          }}
          tweet={tweet}
        />
      </>
    )
  );
};

export default Dropdown;
