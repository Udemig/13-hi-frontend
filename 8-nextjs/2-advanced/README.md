# Parallel Routes

- Parallel routes, aynı aynda birden fazla bağımsız sayfayı aynı layout içerisinde render etmeye yarar.

- `@slot` formatında tanımlanır (örn: `@notification`, `@revenue`)
- slot'lar layout'a prop olarak gönderilir
- layout içerisinde birden fazla sayfayı parallel olarak yükleyeibilirm

# Neden Component Oluşturmak Yerine Parallel Routes ile Sayfa Oluşturmak?

| Normal Components | Sayfa Componentı |
| ----------------- | ---------------- |
| SSR desteği yok   | SSR desteği var  |
| SSG desteği yok   | SSG desteği var  |
| Metadata yok      | Metadata var     |
| Midddleware yok   | Midddleware var  |
| Loading/Err yok   | Loading/Err var  |

# Intercepting Routes

- Interceptin routes, kullanıcı deneyimi arttırmak amacıyla modal tabanlı navigasyon sağlar
- Bu sayede farklı bir sayfa içeriğini kullanıcnın bulunduğu sayfada bir modal olarak gösterebiliriz

# Imports

## Relative Import

- dosya konumuna bağlı olarak `../../` ifadeleriyle kullandığımız import yöntemi

## Absolute Import

- varsayılan olarak `@` kullandığımızda yol olarak src klasörüne gideriz
- bu yöntemle yapılan importlar sayesinde dosya konumunu değiştirsek bile import yolunu değiştirmeye gerek duymayız
