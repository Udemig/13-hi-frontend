# Memorization

- React'taki performans açıklarını kapatmek içn kullandığımız hooklar
- Genellikle gereksiz renderları önleme veya büyük hesaplamarlın tekrar yapılmasını engellemek için kullanırız

# useMemo()

- Bir hesaplmanın her render sırasında yeniden yapılmasının önüne geçer
- İlk hesaplama sonucunu önbelleğe atarak sonra her aynı sonuç gerektiğinde tekrardan hesaplamak yerine bu sonucu kullanır

# useCallback()

- Bir foksiyonun her render sırasında yeniden oluşturulmasının önüne geçer
- Genelde prop olarak gönderdiğimiz fonksiyonlarda kullanarak alt component'ların gereksiz renderlarını önleme amacıyla kullanılır

# React.memo()

- Component'ların aldığı proplar değişmediği müddetçe render olmasının önüne geçer.
- Kapsaycı elementin render olmasından dolayı , alt elementin renderını engellemek için kullanırız.
