import { render } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
// mock'lamak istediğimiz değişkeni import ederiz
import { totalApi } from "../utils/api";

/*
 ! Describe:
 * Birden fazla aynı element/olay'la alakalı test yazıldığında bunları kategorize etmek için kullanırız
 * beforeEach / beforeAll / afterEach / afterAll gibi methodların kullanımına olanak tanır
 */

/*
 ! Mock
 * Yazdığımız testler kesinlikle api istekleri gibi dış kaynaklara bağımlı olmamalı, yani api'dan gelicek olan cevap testin sonucunu etkilememeli

 * Yani backende yanıt geliyor mu testi değil, o yanıt gelirse arayüz doğru şekilde güncelleniyor mu testleri yapıcaz

 * Api isteği atan fonksiyonu "mock'layıp" api'ın döndüreceği cevapları biz belirleyeceğiz. Bu sayede test ortamında geçek api isteği atmadan istek sonucundaki arayüz güncellemelerini test edebilicez
 */

// api isteğini atan get fonksiyonun yerine sahte bir fonksiyon koy (mock)
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("statistics component testleri", () => {
  test("bileşen render olduğunda loader ekrana gelir", () => {
    render(<Statistics />);
  });

  test("api'dan hata gelirse ekrana hata mesajı gelir", () => {
    console.log("🎾 test 2 yapıldı");
  });

  test("api'dan veri gelirse ekrana veriler gelir", () => {
    console.log("🎾 test 3 yapıldı");
  });
});
