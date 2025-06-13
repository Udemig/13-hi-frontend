# Resim

- Eğer resimleri public klasörü içeriisne koyarsa public'deki içerikler doğrudan url üzerinden yayınlndığı için resmin url'i üzerinden ekrana basılabilir

```jsx
<img src={"/open.png"} width={300} height={400} />
```

- Eğer resimleri src klasörü içerisine koyarsa resmi kullanabilmek için öncelikle import etmek gerekli

```jsx
import open from "../assets/open.png";

<img src={open} width={300} height={400} />;
```

# Event Handling

- Klasik js'de olayları addEventListener aracılığı ile dinlerdik
- React'da jsx sayesinde izlemek istediğpimiz olayları doğrudan elementin nitelik bölümünden onChange,onClick,onSubmit şeklinde izleyebiliyoruz

```jsx
<button
  onClick={() => {
    setIsOpen(!isOpen);
  }}
>
  Aç
</button>
```

# Component Türleri

- React'da 2 farklı component türü bulunur.

1. Function Component (Fonksiyonel Bileşen)

- Bu modern react'ta en çok kullanılan bileşen türüdür
- Basit fonksiyon yapısındadır
- useState,useEffect gibi react hookları kullanabilir.
- Dah az kodla yazılır, anlaşılması kolaydır

```jsx
const Counter = (props) => {
  return <div>SAYAÇ {props.title}</div>;
};
```

2. Class Component (Sınıf Tabanlı Bileşen)

- Bu react'ın eski sürümşlerinde daha yagındır
- `extends React.Component` ifadesi ile yazılır
- `render` methodu içerisinde JSX döner
- `this.state` `this.setState` `this.props` gibi yapılar kullanılır
- `lifecycle` methdoları vardır (componentDidMount....)

```jsx
class Counter extend React.Component {
  render(){
      return <div>SAYAÇ {this.props.title}</div>;
  }
};
```

# Lifecycle Methods (Yaşam Döngüsü Methodları)

- Lifecycle Methods, bir component'ın oluşum, güncellenme, kaldırılma süreçlerini yönetmek için kullanılan özel methodlardır.
- Bu kavram özellikle class component'larda vardı. Fakat modern React'ta bu işmleri useEffect gibi Hooks ile fonksiyonel bileşenlerde yapabiliyoruz

## Lifecycle (Yaşam Döngüsü) Nedir?

- Bir component'ın aşağıdaki süreçlerine verilen genel isimdir:

1. Oluşturulması (Mounting)
2. Güncellenmesi (Updating)
3. Kaldırılması (Unmounting)

## Class Component'larda Lifecycle Methodları

1. `componentDidMount()`

- Component DOM'a eklendiğinde (ilk kez yüklendiğinde) çalışır.

2. `componentDidUpdate()`

- Component güncellendiğinde çalışır.

2. `componentWillUnmout()`

- Component Dom'dan silinmeden hemen önce çalışır.
- Genellikle temizlik için kullanılır
- Timer temizliği, abonelik iptali

# React Hooks

- Fonksiyonel component'ların state yönetimi ve yaşam döngüsü özelliklerini kullanmaısını sağlayan fonksiyonlardır
- Class component'ların sahip olduğu yetenekleri fucntional component'lar aktarmak için ortaya çıktı

### 1- useState

- Komponent'ın kendi içinde veri (durum) tutmak için kullanılılır

- React'da arayüz'de değişime sebep olucak bütün veriler state'de tutulur

- useState parametre olarak tutucağmız verinin başlangıç değerini alır
- useState fonksiyonunu çağırınca geriye bir dizi içerisinde:
- [stateDegeri, stateGuncellemeFonksiyonu] return eder
- bu veriye ve methoda daha rahat erişebilmek array destructring yöntemini kullanırız

- Oluşturulan state'in değeri sadece setState methoduyla değiştirelebilir

- State'in değeri her değiştiğinde gerçekleşen güncellemenin arayüze yansıması için react otomatik olarak component'ı tekrar render eder

### 2- useEffect

- Component'ın yaşam döngüsünü fonksiyonel component'larda takip etmemizi sağlayan react hook'u.
- componentDidMount,componentDidUpdate,componentWillUnmount methodlarının üçününde işini yapar
