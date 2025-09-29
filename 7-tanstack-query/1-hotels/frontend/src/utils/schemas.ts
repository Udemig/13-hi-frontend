import * as yup from "yup";

// Yup şeması ile nesnedeki alanların geçerli olması için gerekli şartları belirleriz.
export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("Ad alanı boş bırakılamaz")
    .min(3, "Ad alanı en az 3 karakter olmalıdır")
    .max(40, "Ad alanı en fazla 40 karakter olmalıdır")
    .matches(/^[a-zA-Z\s]+$/, "Ad alanı sadece harf ve boşluk içerebilir"),

  location: yup
    .string()
    .required("Konum alanı boş bırakılamaz")
    .min(3, "Konum alanı en az 3 karakter olmalıdır")
    .max(40, "Konum alanı en fazla 40 karakter olmalıdır")
    .matches(/^[a-zA-Z\s]+$/, "Konum alanı sadece harf ve boşluk içerebilir"),

  address: yup
    .string()
    .required("Adres alanı boş bırakılamaz")
    .min(3, "Adres alanı en az 3 karakter olmalıdır")
    .max(40, "Adres alanı en fazla 40 karakter olmalıdır"),

  description: yup
    .string()
    .required("Açıklama alanı boş bırakılamaz")
    .min(10, "Açıklama alanı en az 10 karakter olmalıdır")
    .max(200, "Açıklama alanı en fazla 200 karakter olmalıdır"),

  amenities: yup
    .string()
    .required("Özellikler alanı boş bırakılamaz")
    .min(3, "Özellikler alanı en az 3 karakter olmalıdır")
    .max(80, "Özellikler alanı en fazla 80 karakter olmalıdır"),

  rating: yup
    .number()
    .required("Puan alanı boş bırakılamaz")
    .min(1, "Puan alanı en az 1 olmalıdır")
    .max(5, "Puan alanı en fazla 5 olmalıdır"),

  price_per_night: yup
    .number()
    .required("Fiyat alanı boş bırakılamaz")
    .positive("Fiyat alanı pozitif olmalıdır")
    .max(99999, "Fiyat alanı en fazla 99999 olmalıdır"),

  availability: yup.boolean(),
});
