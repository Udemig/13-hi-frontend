import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
// mock'lamak istediğimiz değişkeni import ederiz
import { totalApi } from "../utils/api";
import { mockStatisticsData } from "../utils/constants";

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
  // her testin sonunda mock'ları temizle
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen render olduğunda loader ekrana gelir", () => {
    // sahte fonksiyon promise döndürsün
    totalApi.get.mockReturnValue(new Promise(() => {}));

    // bileşeni renderla
    render(<Statistics />);

    // ekranda loader component'ı var mı kontrol et
    screen.getByTestId("loader");
  });

  test("api'dan hata gelirse ekrana hata mesajı gelir", async () => {
    // sahte fonksiyon hata mesajı döndürsün
    totalApi.get.mockRejectedValue(new Error("404 istatistik alınamadı"));

    // bileşeni renderla
    render(<Statistics />);

    // belirli bi sürenin ardından ekrana hata mesajı geliyo mu kontrol et
    // waitFor: fonkda verilen olay geçekleşen kadar bir süre bekller
    await waitFor(() => screen.getByText("Üzgünüz bir hata oluştu"));
  });

  test("api'dan veri gelirse ekrana veriler gelir", async () => {
    // istatistik versini döndürsün
    totalApi.get.mockResolvedValue({ data: { data: mockStatisticsData } });

    // bileşeni renderla
    render(<Statistics />);

    // api isteğinin atılmasını bekle
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // ekrana veriler geldi mi
    screen.getByText("Toplam Vaka");
    screen.getByText("Aktif Vaka");
    screen.getByText("Toplam Vefat");
  });
});
