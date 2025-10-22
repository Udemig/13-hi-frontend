# Yazılım Mimarisi

- Yazılım mimarisi, bir yazılım (uygulama, web sitesi, api, oyun) yapı taşlarını, bu yapı taşlarının bibirleriyle olan etkileşimlerin, sistemdeki akışları, karar noktlarını ve performas / sürdürülebilirlik gereksinimlerini kapsayan bir disiplindir

## Yapı Taşları

### 1) Bileşenler (Components)

- Mimarinin işlevsel birimlerini temsil eder.
- Birbirleriyle etkileşim halindedir.

### 2) Bağlantıları (Connections)

- Bileşenlerin birbirleriyle olan etkileşimlerini temsil eder.
- Frontend: state yönetim araçları: Redux, Context, Zustand
- Backend: kimlik doğrulama/oturum yönetimi: JWT, Session, Cookie
- Backend: iletişim araçları: RabbitMQ, Kafka

### 3) Kalite Nitelekleri

- Sistemden beklenen performans, ölçeklenebilirlik, güvenlik, erişlebilirlik gibi gereksinimleri ifade eder

### 4) Teknoloji Kısıtlamaları

- Toknolojik veya işlevsel kısıtlamalardır.
- Kullanılacak olan teknoloji, diller, frameworkler, veritabanları, işletim sistemleri gibi.
- Bulut platformları AWS, Azure, Google Cloud, Firebase / docker gibi teknolojilerin kullanılması.

### 5) Tasarım Desenleri (Design Patterns)

- Yazılım mimarisinin yapısınmın tasarımda kullanılan desenlerdir.
- Projeyi geliştiriken sistemeleri / servisleri / componentları neye göre ayırılıcağını belirler

1. Monolithic Arcihitecture

- Tüm sistemin tek bir kod tabanında yazıldığı ve tek bir yerden dağıtıldığı (yayınlama) pattern
- Örn: Bütün amazon websitesinin tek bir react projesinde yazma
- Örn: Bütün amazon backendinin tek bir nodejs projesinde yazma

2. Microservice Architecture

- Sistemin küçük, bağımsız servislerden oluştuğu model.
- Örn: Amazon websitesinin her bir bölümünü (ürünler, satıcı paneli, admin paneli, ödeme) ayrı birer servis olarak yazılması

3. MVC (Model, View, Controller) Pattern / MVVM

- - Model: Veri ve iş mantığıyla alakalı kodları içerir
- - View: Kullanıcı arayüzü ile alakalı kodları içerir
- - Controller: İş mantığı ile alakalı kodları içerir
- - Fronted'de .Net projelerinde ve Backend projelerinde kullanılır

4. Component Based Architecture

- Yazılımı, bileşenlerin oluşturduğu model.
- Örn: React, Vue, Angular frameworkler kullanılır

## Doğru Yazılım Mimarisinin Faydaları

1. Performans: İyi tasarlanmış bir mimarisi sistemin kaynaklarının verimli kullanılmasını sağlar.
2. Ölçeklenbilirlik
3. Bakım ve Geliştirilebilirlik kolaylaştırır.
4. Ekipler arası iş birliği ve verimlilik artar
5. Maaliyet
6. Yeniden kullanılabilirlik
