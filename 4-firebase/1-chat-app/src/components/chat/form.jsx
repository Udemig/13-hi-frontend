import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Form = ({ room, user }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    // verinin kaydedileceği kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // mesaj belgesini kolleksiyona ekle (veritabanına kaydet)
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border border-gray-200 shadow-lg flex justify-center gap-3">
      <input
        type="text"
        placeholder="mesaj giriniz..."
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-200 shadow-sm p-2 px-3 rounded-md w-1/2"
      />

      <div>
        <button className="btn text-base">😂</button>
      </div>

      <button disabled={!text.trim()} className="btn bg-black text-white disabled:brightness-75">
        Gönder
      </button>
    </form>
  );
};

export default Form;
