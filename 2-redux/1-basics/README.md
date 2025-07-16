# Temel Kavramlar

#### State

- Component'ın verisini tutmak ve yönetmek için kullanırız
- - Her değiştiğinde component yeniden render olur

### Prop

- Veriyi bir component'tan diğerine aktarma yöntemidir.
- - Üst (Kapsayıcı component)'dan alt componnet'a doğru veri aktarılır

### Prop Drilling

- İç içe bir çok bileşen olduğu durumda en üstteki bileşenden alt seviyelerdeki bir bileşene propu aktarmak istediğimizden 3-5 kere prop göndermemiz gerekir bu işleme `prop drilling` adı verilir

### Context

- Component'lardan bağımsız noktalarda veri depolamamızı sağlar.
- - Component'lar context yapılarına direkt abone olabildikleri için prop drillingi önler
- - State'leri component'lardan bağımsız yönettiğimiz için yönetilebilirliği arttırır.

### Context Neden En İyi Çözüm Değil ?

- Context yapısı çok iyi bir state yönetim çözümü ancak belirli bir uygulama boyutuna kadar.
- Belirli bir noktadan sonra projedeki state'leri yönetmek için çok fazla provider yazar ve kullanrız bu hem okunabilirliği olumsuz etkiler hem performansı olmsuz etkiler hem de kod tekrarına sebep olur

### Redux'ın Artıları

- Kod tekrarını önler
- Daha performanslı bir şekilde state yönetimi sağlar
- Bileşenlerdeki karışıkşlığı engeller
- Hata ayıklama anlamında daha gelişmiştir
- Merkezi bir state yönetim state sunar

# Redux Yapısı

1. Store: Uygulumadaki tüm reducer'ları bir arada tutarak veriye tek bir merkezden ulaşılmasını sağlar

2. Reducer: Bir state tutuan ve dispatch edilen action'a göre bu state'i güncelleyen fonksiyon

3. Dispatch: Action'ı reducer fonksiyonuna ileten aracı

4. Action: State'in nasıl değişeceiğini ifade eden nesne.

- Action nesnesi 2 değere sahiptir:
- - Type(Zorunlu): Action'un görevini tanımlayan string
- - Payload(Opsiyonel): Reducer'ın işlemi gerçekleştirebilmesi için action ile gönderdiğimiz veri

5. Subscribe: Store'daki verilere erişimemizi sağlayan yöntem

6. Provider: Store'da tutulan verileri uygulamaya sağlayan higher order component (HOC).

# Kurulum

1. Paket indirme
   `npm i redux react-redux`

2. Reducer tanımla
   Projede kullancığınız verileri yöneticek reducer fonksiyonlarını tanıma

3. Store tanımla
   Reducer'ları birleştirip store'u oluştur

4. Proje Tanıt
   Provider ile store'u projeye tanıt
