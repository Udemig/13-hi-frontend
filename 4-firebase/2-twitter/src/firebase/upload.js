import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from ".";
import { v4 } from "uuid";

// parametre olarak aldığı dosyayı firebase storage'a yükledikten sonra resmin url'ini döndürür
const upload = async (file) => {
  // 1) dosya yoksa durdur
  if (!file) return null;

  // 2) dosya formatını kontrol et
  if (!file.type.startsWith("image")) {
    throw new Error("Medya tipi desteklenmiyor");
  }

  // 3) dosya boyutu 3mb üstünde ise yüklemeye izin verme
  if (file.size > 3000000) {
    throw new Error("Medya içeriği sınırı aşıyor");
  }

  // 4) resmin yükleneceği konumun referansını al
  const imageRef = ref(storage, v4() + file.name);

  // 5) resmi storage'a yükle
  await uploadBytes(imageRef, file);

  // 6) kaydedilen fotonun url'ini al
  const url = await getDownloadURL(imageRef);

  return url;
};

export default upload;
