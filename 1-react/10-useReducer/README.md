# useReducer

- Bir react hook'udur.
- useReducer bir component içeriisndeki birden fazla state'i daha kolay bir şekilde yönetmek için kullanılır.
- Bu hooku genelde useState'ile staet yönetmenin karmaşık olmaya başladığı componenet'larda useState'in yerine tercih ederiz
- Component içerisindeki bütün state yönetim mantığını darklı bir dosyada tanımlamamıza olanak sağlar bu da kod okunabilirliğini ve yönetilebilirliğini arttırır

1. Action

- State'in nasıl değiceğini ifade eden nesneler
- type ve payload değerine sahiptir
- type: Ekle, Sil, Güncelle, Gönder, Yükle
- payload: eylemin gerçekleşmesi için gerekli datayı taşır
- örnek action: {type:"SİL",payload:876}

2. Dispatch

- Aksiyonu reducer fonksiyonuna göndermeye yarar
- Dispatch: Sevketmek

3. Reducer

- State'in nasıl değişeceğine karar veren fonksiyon
- Aksiyon'lar dipsatch edildiği zaman useReducer bunları görür ve dispatch edilen aksiyona göre state'in nasıl değişeceğine karar verir
