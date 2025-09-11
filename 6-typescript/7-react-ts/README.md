# Typescript İle React Yazarken

## Dosya Uzantısı

- jsx kodu içermeyen dosyalar `ts`
- jsx kodu içeren dosyalar `tsx`

## Önemli

- Tipi tanımlanabilen her değişkenin / fonksiyonun / parametrenin / component'ın mutalaka ve mutlaka tipi tanımlanmalı
- Otomatik tip algılama özelliği mümkünse hiç kullanılmamalı
- Otomatik tip algılamaya güvenip bir değişkenin bile tipi boş bırakılmamalı

## Hooks

- React hook'larını kullanırken bir veri tutuyorsa tipi tanımlanmalı
- useState ile tutuğumuz state'in tipini generic aracılığıyla tanımlarız
- useRef ile referansılı aldığımız elementin tipi generic aracılığıy tanımlanır.
- useContext, useReducer, useSelector, useParams...

## Element Tipi

- Her JSX elementinin kendine has type'ı bulunur.
- Çok fazla element olduğu için type'lar unutulmaması için hep aynı syntax ile yazılır
- `HTML[Etiket_Rolü | Etiket_İsmi]Element`
- button: `HTMLButtonElement`
- input: `HTMLInputElement`
- form: `HTMLFormElement`
- h1: `HTMLHeadingElement`

## Component Tipi

- react'ta en çok kullandığımız yapılar component'lardır
- component'lar ise birer fonksiyondur
- Fonksiyonlarda tipi tanımını yaparken her zaman 2 noktanın tipini tanımlarız:
- - parametre: fonksiyonun hangi tipte parametre aldığını belirleriz
- - return: fonksiyonun hangi tipte değer döndürdüğünü belirleriz
- Component tanımlarken prop olarak aldığı parametrenin ve return ettiği JSX elementinin tipini taınmlarız

## Import

- type/interface import ederken başına type ifadesi koyarız
- `import type { JSX, FC } from "react";`

## Event Tipi

- onClick / onChange / onSubmit gibi olaylarda çalıştırdığımız fonksiyonlara olay verisi içeren event parametresi gider
- event parametresinin değerlerine erişmek için tip tanımlansması gerekir

- her olayın kendi tipi vardır:
- - onClick: `MouseEvent`
- - onChange: `ChangeEvent`
- - onSubmit: `FormEvent`

- even ttipleri olayın hangi elementte gerçekleştiğini generic olarak alır
- - `ChangeEvent<HTMLInputElement>`
- - `MouseEvent<HTMLButtonElement>`
- - `FormEvent<HTMLFormElement>`
