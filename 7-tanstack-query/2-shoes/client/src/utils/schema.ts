import * as yup from "yup";

const nameRegex = /^[A-Za-z\s]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{6,}$/;

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(nameRegex, "Ad sadece harfler ve boşluk içerebilir")
    .required("Adınızı giriniz"),

  lastName: yup
    .string()
    .matches(nameRegex, "Soyad sadece harfler ve boşluk içerebilir")
    .required("Soyadınızı giriniz"),

  email: yup
    .string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta adresinizi giriniz"),

  password: yup
    .string()
    .matches(passwordRegex, "Şifre yeterince güçlü değil")
    .required("Şifrenizi giriniz"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre tekrarınızı giriniz"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta adresinizi giriniz"),

  password: yup.string().required("Şifrenizi giriniz"),
});
