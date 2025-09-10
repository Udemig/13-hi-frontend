/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirtiriz.
 * Soyut sınıfların doğrudan örnekleri oluşturulamaz
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi tanım.
*/

// Soyut Sınıf
abstract class Photo {
  // constructor
  constructor(cameraMode: string, filter: string) {}

  // method: doğrudan miras alan sınıfa geçicek
  takePhoto(): void {
    console.log("Fotoğraf çekiliyor...");
  }

  // soyut method: miras alan sınıfların kendi özelliklerine göre implement etmesini sağlar
  abstract sharePhoto(user: string): void;
}

// soyut sınıfların doğrudan örneği alınamaz
// new Photo(); //!hata

// Soyut sınıfı miras alan bir child sınıf tanımlayım
class Instagram extends Photo {
  sharePhoto(user: string): void {
    console.log(`Fotoğrafa instada ${user} ile paylaşıldı`);
  }
}

// Soyut sınıfı miras alan bir child sınıf tanımlayım
class Twitter extends Photo {
  sharePhoto(user: string): void {
    console.log(`Fotoğraf tw'da ${user} ile paylaşıldı`);
  }
}

const insta = new Instagram("arka", "black/white");
const tw = new Twitter("arka", "black/white");
insta.takePhoto();
insta.sharePhoto("ahmet");
tw.takePhoto();
tw.sharePhoto("ali");
