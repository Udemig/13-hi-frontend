import { useState } from "react";
import AuthToggle from "./auth-toggle";
import EmailInput from "./email-input";
import ForgotPassword from "./forgot-password";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // formdaki verilere eriş
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      if (isLoginMode) {
        // giriş yapma modundaysak:
        const res = await signInWithEmailAndPassword(auth, email, password);

        // mailini doğrulamış ise bildirim gönder
        if (!res.user.emailVerified) {
          return toast.info("Lütfen mailinizi doğrulayın");
        }

        // mailini doğrulamış ise anasayfaya yönlendir
        navigate("/feed");
        toast.success("Hesaba giriş yapıldı");
      } else {
        // kayıt olma modundaysak:
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // doğrulama epostası gönder
        await sendEmailVerification(res.user);

        // giriş moduna geç
        setIsLoginMode(true);

        // bildirim gönder
        toast.info("Mailinize doğrulama epostası gönderildi");
      }
    } catch (error) {
      toast.error("Hata!: " + error.code);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      <ForgotPassword isLoginMode={isLoginMode} />

      <SubmitButton isLoginMode={isLoginMode} />

      <AuthToggle isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </form>
  );
};

export default LoginForm;
