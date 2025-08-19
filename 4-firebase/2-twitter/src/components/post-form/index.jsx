import { toast } from "react-toastify";
import FormActions from "./form-actions";
import Preview from "./preview";
import TextArea from "./text-area";
import UserAvatar from "./user-avatar";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/index";
import upload from "../../firebase/upload";
import { useState } from "react";
import { useRef } from "react";

const PostForm = ({ user }) => {
  const [isLoading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target.text.value;
    const file = e.target.image.files[0];

    // girdi yoksa bildirim gönder
    if (!text.trim() && !file) return toast.warning("Lütfen içeriği belirleyiniz");

    // tweet'i kolleksiyona kaydet
    try {
      // loader'ı aktif et
      setLoading(true);

      // resmi storage'a kaydet
      const imageUrl = await upload(file);

      // kolleksiyonun referansını al
      const collectionRef = collection(db, "tweets");

      // belgeyi kolleksiyona kaydet
      await addDoc(collectionRef, {
        content: { text, image: imageUrl },
        likes: [],
        isEdited: false,
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      // hatayı bildir
      console.log(err);
      toast.error("Hata! " + err?.message);
    } finally {
      // loader'ı inaktif et
      setLoading(false);
      //inputları temizle
      e.target.reset();
      setPreview(null);
    }
  };

  // resim değişince çalışır
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // önizlemeyi kapatınca çalışır
  const close = () => {
    // önizleme state'ini
    setPreview(null);

    // file input'un value sunu temizle
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="border-b border-tw-gray p-4 flex gap-3">
      <UserAvatar photo={user?.photoURL} name={user?.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />
        <Preview isLoading={isLoading} url={preview} close={close} />
        <FormActions isLoading={isLoading} fileInputRef={fileInputRef} handleImageChange={handleImageChange} />
      </form>
    </div>
  );
};

export default PostForm;
