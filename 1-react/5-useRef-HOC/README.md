# useRef

- useRef, react'ta şu durumlarda kullanılır:

1. DOM elementlerine direkt erişim sağlama
2. Component re-render olmadan değer saklama

# HOC (Higher Order Components)

## Yüksek Düzey Bileşenler

- Normal componentlardan farklı olarak `self-closing` değildir kendi kapanış etiketi vardır.
- `<Component/>` | `<Component> İçerik <Component />`

- Açılış kağanış etiketi içerisinde yer alan içerik component içerisinde `children` propuyla erişliebilir

- Farklı elementleri/componentları kapsadığı için ismi hoc'dır.
