import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, provider } from "../../firebase";

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/feed");
      toast.success("Oturum açıldı");
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="bg-white flex items-center justify-center py-2 px-10 rounded-full text-black hover:bg-gray-200 whitespace-nowrap gap-x-3 transition cursor-pointer"
    >
      <img src="/google-logo.png" alt="google-logo" className="h-[20px]" />
      <span>Google ile Giriş Yap</span>
    </button>
  );
};

export default GoogleButton;
