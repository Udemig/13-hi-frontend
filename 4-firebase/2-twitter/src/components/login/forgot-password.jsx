import { useState } from "react";
import ResetModal from "../modal/reset-modal";

const ForgotPassword = ({ isLoginMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // eleman ekrandan giidnce arayüz kaymasın diye boş div bas
  if (!isLoginMode) return <div className="h-[28px] w-1" />;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer"
      >
        Şifreni mi unuttun?
      </button>

      <ResetModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default ForgotPassword;
